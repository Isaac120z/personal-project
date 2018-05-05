import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LoginLandingStyle from "./LoginLandingStyle.css";
import { getReportingScreeningData } from "../../ducks/screeningdataReducer";

import Checkout from "../Checkout/Checkout";
import Paper from "material-ui/Paper";

class LoginLanding extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getReportingScreeningData();
  }

  render() {
    console.log(this.props.currentScreeningData);
    return (
      //   <div className="test"> test</div>
      <div className="login-page">
        {this.props.currentScreeningData.map((val, i) => (
          <div key={i}>
            <div className="welcome">
              {" "}
              Welcome {val.name}!{" "}
              <div>
                {" "}
                Your last screening was on{" "}
                {val.date_of_screening
                  .split("")
                  .splice(0, 10)
                  .join("")}
              </div>
            </div>
          </div>
        ))}

        <div className="bold-statement-login-landing">
          Keep Track Of Your Health!
        </div>
        <div className="info-box">
          <div className="box-one">
            <div />
            <div className="text-one">Enter new screening data</div>
            <Link to="/Registration">
              <button className="text-two">New Record Page</button>
            </Link>
          </div>
          <div className="box-two">
            <div />
            <div className="text-one">
              Review results from previous screening
            </div>
            <div className="text-two">
              <Link to="/reporting">
                <button className="text-two">Reports</button>
              </Link>{" "}
            </div>
          </div>

          <div className="box-three">
            <div />
            <div className="text-one">
              Update or delete previous screening data
            </div>
            <div className="text-two">
              <Link to="/updateprofile">
                <button className="text-two">Update/Delete</button>
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.screeningdataReducer });

export default connect(mapStateToProps, { getReportingScreeningData })(
  LoginLanding
);
