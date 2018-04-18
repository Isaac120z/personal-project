import React from "react";
import {Switch, Route} from "react-router-dom";

import Login from "./components/Login/Login";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutPage from './components/AboutPage/AboutPage';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';
import ReportingPage from './components/ReportingPage/ReportingPage';

export default (
    <Switch>
        <Route path="/login" component={Login}/>
        <Route exact path="/" component={LandingPage}/>
        {/* <Route path="/about" component ={AboutPage}/> */}
        <Route path="/Registration" component ={RegistrationPage}/>
        <Route path="/reporting" component={ReportingPage}/>
        




        <Route path="*" render={()=> <div><p>Not Found</p></div>}/>
    </Switch>
);