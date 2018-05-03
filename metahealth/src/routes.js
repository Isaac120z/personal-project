import React from "react";
import { Switch, Route } from "react-router-dom";

// import Login from "./components/Login/Login";
import LandingPage from "./components/LandingPage/LandingPage";

import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import ReportingPage from "./components/ReportingPage/ReportingPage";
import UpdateProfilePage from "./components/UpdateProfilePage/UpdateProfilePage";
import DeleteRecord from "./components/DeleteRecord/DeleteRecord";
import CholesterolChart from "./components/Charts/CholesterolChart";
import WaistCircumferenceChart from "./components/Charts/WaistCircumferenceChart";
import TriglyceridesChart from "./components/Charts/TriglyceridesChart";
import BloodSugarChart from "./components/Charts/BloodSugarChart";
import BloodPressureChart from "./components/Charts/BloodPressureChart";
import AboutPage from "./components/AboutPage/AboutPage";
import AdminPage from "./components/AdminPage/AdminPage";

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
    <Route path="/bloodpressurechart" component={BloodPressureChart} />
    <Route path="/about" component={AboutPage} />
    <Route path="/adminpage" component={AdminPage} />
    path="*" render={() => (
      <div>
        <p>Not Found</p>
      </div>
    )}
    />
  </Switch>
);
