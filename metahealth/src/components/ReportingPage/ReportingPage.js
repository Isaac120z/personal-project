import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import BloodPressureChart from "../Charts/BloodPressureChart";
import BloodSugarChart from "../Charts/BloodSugarChart";
import CholesterolChart from "../Charts/CholesterolChart";
import WaistCircumferenceChart from "../Charts/WaistCircumferenceChart";
import TriglyceridesChart from "../Charts/TriglyceridesChart";

import ReportingPageStyle from "./ReportingPageStyle.css";

import { getReportingScreeningData } from "../../ducks/screeningdataReducer";

class ReportingPage extends Component {
  componentDidMount() {
    this.props.getReportingScreeningData();
  }

  render() {
    console.log(this.props);

    return (
      <div className="reporting-form">
        <div className="screening-chart-title">Screening Data Report</div>
        <div>
          {this.props.currentScreeningData.map((val, i) => (
            <div key={i}>
              <div className="date-of-screening-wrapper">
                <div className="screening-title">Date of Screening </div>
                <div className="screening-value">
                  {val.date_of_screening
                    .split("")
                    .splice(0, 10)
                    .join("")}{" "}
                </div>{" "}
              </div>

              <div className="waist-circumference-wrapper">
                <div className="screening-title waist-circumference">
                  Waist Circumference:{" "}
                </div>
                <div className="screening-value">
                  {val.waist_circumference} in
                </div>

                {(val.gender === "Male" && val.waist_circumference >= 40) ||
                (val.gender === "Female" && val.waist_circumference >= 35) ? (
                  <div>
                    <div className="risk-level high-risk">
                      high risk Waist Circumference
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="risk-level low-risk ">
                      low risk Waist Circumference
                    </div>
                  </div>
                )}
              </div>

              <div className="triglycerides-wrapper">
                <div className="triglycerides">Triglycerides: </div>
                <div className="screening-value">{val.triglyceride} mg/dL </div>

                {val.triglyceride >= 150 ? (
                  <div>
                    <div className="risk-level high-risk">
                      high risk triglyceride
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="risk-level low-risk">
                      low risk triglyceride
                    </div>
                  </div>
                )}
              </div>

              <div className="cholesterol-wrapper">
                <div className="screening-title">HDL Cholesterol </div>
                <div className="screening-value">{val.cholesterol} mg/dL </div>

                {(val.gender === "Male" && val.cholesterol >= 50) ||
                (val.gender === "Female" && val.cholesterol >= 40) ? (
                  <div>
                    <div className="risk-level high-risk">
                      high risk cholesterol
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="risk-level low-risk">
                      low risk cholesterol
                    </div>
                  </div>
                )}
              </div>

              <div className="blood-pressure-wrapper">
                <div className="screening-title">
                  Blood Pressure Systolic / Diastolic{" "}
                </div>
                <div className="screening-value">
                  {val.blood_pressure_systolic} / {val.blood_pressure_diastolic}mm
                  Hg
                </div>

                {val.blood_pressure_systolic >= 130 ||
                val.blood_pressure_diastolic >= 85 ? (
                  <div>
                    <div className="risk-level high-risk">
                      high risk bloodpressure
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="risk-level low-risk">
                      low risk bloodpressure
                    </div>
                  </div>
                )}
              </div>

              <div className="blood-sugar-wrapper">
                <div className="screening-title">Blood Sugar </div>
                <div className="screening-value">{val.blood_sugar} mg/dL </div>

                {val.blood_sugar >= 100 ? (
                  <div>
                    <div className="risk-level high-risk">
                      high risk Blood Sugar
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="risk-level low-risk">
                      low risk Blood Sugar
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.screeningdataReducer });

export default connect(mapStateToProps, { getReportingScreeningData })(
  ReportingPage
);

{
  /* <div className="chart-design">
<div className="chart waist">
  <WaistCircumferenceChart />
</div>
<div className="chart triglycerides">
  <TriglyceridesChart />
</div>
<div className="chart cholesterol">
  <CholesterolChart />
</div>

<div className="chart bloodpressure">
  <BloodPressureChart />
</div>

<div className="chart sugar">
  <BloodSugarChart />
</div>
</div> */
}
