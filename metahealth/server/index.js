require ("dotenv").config();
const express = require ("express");
const {json} = require ("body-parser");
const cors = require ("cors");
// const session = ("express-session");
const massive = require ("massive");
// const passport = require("passport");
const app = express();

const port = process.env.PORT || 3001;




app.listen(port, ()=> {
    console.log (`Listening at port ${port}`);
})

