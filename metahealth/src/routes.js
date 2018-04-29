import React from "react";
import { Switch, Route } from "react-router-dom";

// import Login from "./components/Login/Login";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutPage from "./components/AboutPage/AboutPage";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import ReportingPage from "./components/ReportingPage/ReportingPage";
import UpdateProfilePage from "./components/UpdateProfilePage/UpdateProfilePage";
import DeleteRecord from "./components/DeleteRecord/DeleteRecord";
import Chart from "./components/Chart";

export default (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/Registration" component={RegistrationPage} />
    <Route path="/reporting" component={ReportingPage} />
    <Route path="/updateprofile" component={UpdateProfilePage} />
    <Route path="/delete" component={DeleteRecord} />
    <Route path="/chart" component={Chart} />
    path="*" render={() => (
      <div>
        <p>Not Found</p>
      </div>
    )}
    />
  </Switch>
);
