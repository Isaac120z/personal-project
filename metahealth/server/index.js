require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
const passport = require("passport");
const app = express();

const SERVER_CONFIGS = require("./constants/server");

const configureServer = require("./server");
const configureRoutes = require("./routes");
const paymentApi = require("./routes/payment");

configureServer(app);
configureRoutes(app);

const { strat, logout, getUser } = require(`${__dirname}/controllers/authCtrl`);
const {
  getScreeningData,
  updateScreeningData,
  deleteScreeningData,
  addScreeningData,
  getReportingScreeningData
} = require(`${__dirname}/controllers/dataCtrl`);

massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.log(err));

//use for production
// app.use(express.static(`${__dirname}/../build`));

app.use(json());
app.use(cors());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 10000000
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(strat);

passport.serializeUser((user, done) => {
  app
    .get("db")
    .getUserByAuthid(user.id)
    .then(response => {
      if (!response[0]) {
        app
          .get("db")
          .addUserByAuthid([user.displayName, user.id])
          .then(res => {
            return done(null, res[0]);
          })
          .catch(err => console.log(err));
      } else {
        return done(null, response[0]);
      }
    })
    .catch(err => console.log(err));
});

passport.deserializeUser((user, done) => {
  return done(null, user);
});

//User End Points
app.get(
  "/auth",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/loginlanding",
    failureRedirect: "http://localhost:3000/#/"
  })
);
app.get("/logout", logout);
app.get("/api/me", getUser);

// Screening Data End Points
app.get("/api/screeningdata", getScreeningData);
app.put("/api/screeningdata/:id", updateScreeningData);
app.post("/api/screeningdata", addScreeningData);
app.delete("/api/screeningdata/:id/:user_id", deleteScreeningData);
app.get("/api/screeningdata/report", getReportingScreeningData);

const port = process.env.PORT || 3001;

// use for production
// const path = require("path");
// app.get("*", (req, res, next) => {
//   res.sendFile(path.join(__dirname, "/../build/index.html"));
// });

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
