import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LandingStyle from "./LandingStyle.css";
import { getReportingScreeningData } from "../../ducks/screeningdataReducer";
import Checkout from "../Checkout/Checkout";
import Paper from "material-ui/Paper";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <div className="bold-statement">Keep Track Of Your Health!</div>

        <div className="info-box">
          <div className="box-one">
            <div className="text-one">
              A place to keep track of your biometric screening reults
            </div>
            <div className="text-two">
              You may change medical providers, but you will always have your
              health stats with you.
            </div>
          </div>

          <div className="box-two">
            <div className="text-one">Understand your health risks</div>
            <div className="text-two">
              Enter biometric screening results from your annual physical and
              access immmediate healh risk data.
            </div>
          </div>

          <div className="box-three">
            <div className="text-one">
              View charts showing year over year data
            </div>
            <div className="text-two">
              Review past screening data showing trends to help you identify
              areas of improvment.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.screeningdataReducer
  };
};

export default connect(mapStateToProps, { getReportingScreeningData })(
  LandingPage
);
