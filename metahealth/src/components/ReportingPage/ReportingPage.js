import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { getReportingScreeningData } from "../../ducks/screeningdataReducer";

class ReportingPage extends Component {
  componentDidMount() {
    this.props.getReportingScreeningData();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.screeningData.map((val, i) => (
          <div key={i}>
            <h5>Date of Screening {val.date_of_screening}</h5>
            <h5>Waist Circumference {val.waist_circumference}</h5>
            <h5>Triglycerides {val.triglyceride}</h5>
            <h5>Cholesterol {val.cholesterol}</h5>
            <h5>Blood Pressure Systolic {val.blood_pressure_systolic}</h5>
            <h5>Blood Pressure Diastolic {val.blood_pressure_diastolic}</h5>
            <h5>Blood Sugar {val.blood_sugar}</h5>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.screeningdataReducer });

export default connect(mapStateToProps, { getReportingScreeningData })(
  ReportingPage
);
