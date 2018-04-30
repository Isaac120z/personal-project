import React from "react";
import { Switch, Route } from "react-router-dom";

// import Login from "./components/Login/Login";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutPage from "./components/AboutPage/AboutPage";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import ReportingPage from "./components/ReportingPage/ReportingPage";
import UpdateProfilePage from "./components/UpdateProfilePage/UpdateProfilePage";
import DeleteRecord from "./components/DeleteRecord/DeleteRecord";
import CholesterolChart from "./components/Charts/CholesterolChart";
import WaistCircumferenceChart from "./components/Charts/WaistCircumferenceChart";
import TriglyceridesChart from "./components/Charts/TriglyceridesChart";
import BloodSugarChart from "./components/Charts/BloodSugarChart";

export default (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/Registration" component={RegistrationPage} />
    <Route path="/reporting" component={ReportingPage} />
    <Route path="/updateprofile" component={UpdateProfilePage} />
    <Route path="/delete" component={DeleteRecord} />
    <Route path="/cholesterolchart" component={CholesterolChart} />
    <Route path="/waistchart" component={WaistCircumferenceChart} />
    <Route path="/triglycerideschart" component={TriglyceridesChart} />
    <Route path="/bloodsugarchart" component={BloodSugarChart} />
    path="*" render={() => (
      <div>
        <p>Not Found</p>
      </div>
    )}
    />
  </Switch>
);
