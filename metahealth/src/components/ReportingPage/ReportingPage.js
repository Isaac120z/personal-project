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
    console.log(this.props.currentScreeningData);

    return (
      <div className="reporting-form">
        <div className="screening-chart-title">
          Review your most recent screening data discuss any high risk results
          with your doctor.
        </div>
        <div>
          {this.props.currentScreeningData.map((val, i) => (
            <div key={i}>
              <div className="screening-chart-title">
                Review your most recent screening data discuss any high risk
                results with your doctor.
              </div>

              <div className="date-of-screening-wrapper">
                <div className="screening-title">
                  Date of Screening :{" "}
                  {val.date_of_screening
                    .split("")
                    .splice(0, 10)
                    .join("")}
                </div>
                <div className="screening-measurement">Measurement</div>
                <div> Risk Level</div>
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
                    <div className="risk-level high-risk">high risk</div>
                  </div>
                ) : (
                  <div>
                    <div className="risk-level low-risk ">low risk</div>
                  </div>
                )}
              </div>

              <div className="triglycerides-wrapper">
                <div className="triglycerides">Triglycerides: </div>
                <div className="screening-value">{val.triglyceride} mg/dL </div>

                {val.triglyceride >= 150 ? (
                  <div>
                    <div className="risk-level high-risk">high risk</div>
                  </div>
                ) : (
                  <div>
                    <div className="risk-level low-risk">low risk</div>
                  </div>
                )}
              </div>

              <div className="cholesterol-wrapper">
                <div className="screening-title">HDL Cholesterol </div>
                <div className="screening-value">{val.cholesterol} mg/dL </div>

                {(val.gender === "Male" && val.cholesterol >= 50) ||
                (val.gender === "Female" && val.cholesterol >= 40) ? (
                  <div>
                    <div className="risk-level high-risk">high risk</div>
                  </div>
                ) : (
                  <div>
                    <div className="risk-level low-risk">low risk</div>
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
                    <div className="risk-level high-risk">high risk</div>
                  </div>
                ) : (
                  <div>
                    <div className="risk-level low-risk">low risk</div>
                  </div>
                )}
              </div>

              <div className="blood-sugar-wrapper">
                <div className="screening-title">Blood Sugar </div>
                <div className="screening-value">{val.blood_sugar} mg/dL </div>

                {val.blood_sugar >= 100 ? (
                  <div>
                    <div className="risk-level high-risk">high risk</div>
                  </div>
                ) : (
                  <div>
                    <div className="risk-level low-risk">low risk</div>
                  </div>
                )}
              </div>
              <div>
                {(val.gender === "Male" && val.waist_circumference >= 40) ||
                (val.gender === "Female" && val.waist_circumference >= 35) ? (
                  <div>
                    <div className="high-risk-recommendation">
                      High Risk Alert: One of the risk factors for Metabolic
                      syndrome is having a waistline that measures over 35
                      inches (89 centimeters) for women and over 40 inches (102
                      centimeters) for men. Excessive belly fat can lead to an
                      increased risk of caridovascular disease.
                    </div>
                  </div>
                ) : (
                  <div>
                    <div />
                  </div>
                )}
              </div>
              <div>
                {" "}
                {val.triglyceride >= 150 ? (
                  <div>
                    <div className="high-risk-recommendation">
                      High Risk Alert: Triglycerides are the main constituents
                      of natural fats and oils, and high concentrations in the
                      blood indicate an elevated risk of stroke. Ranges of 150
                      milligrams per deciliter,(mg/dL), or 1.7 millimoles per
                      liter (mmol/L), or higher indicates an increased chances
                      for heart disease, heart attacks, and stroke.
                    </div>
                  </div>
                ) : (
                  <div>
                    <div />
                  </div>
                )}{" "}
              </div>
              <div>
                {(val.gender === "Male" && val.cholesterol >= 50) ||
                (val.gender === "Female" && val.cholesterol >= 40) ? (
                  <div>
                    <div className="high-risk-recommendation">
                      High Risk Alert: High-density lipoprotein (HDL)
                      cholesterol are considered good cholesterol. HDL
                      cholesterol helps carry cholesterol from your arteries to
                      your liver, where it can be used or excreted. Having high
                      levels of HDL also has antioxidant and anti-inflammatory
                      effects, and is linked to a reduced risk of heart disease.
                      You are at risk of having too little HDL cholesterol if
                      your screening results show less than 40 mg/dL (1.04
                      mmol/L) for men or less than 50 for women.
                    </div>
                  </div>
                ) : (
                  <div>
                    <div />
                  </div>
                )}
              </div>
              <div>
                {val.blood_pressure_systolic >= 130 ||
                val.blood_pressure_diastolic >= 85 ? (
                  <div>
                    <div className="high-risk-recommendation">
                      High Risk Alert: High blood pressure or hypertension
                      increases the risk of heart disease and stroke.
                      Hypertension risk factors include obesity, drinking too
                      much alcohol, smoking, and family history. You are
                      considered to have hyper-tension when you exceed a blood
                      presure reading of 130/85 millimeters of mercury (mm Hg)
                      or higher.
                    </div>
                  </div>
                ) : (
                  <div>
                    <div />
                  </div>
                )}
              </div>
              <div>
                {val.blood_sugar >= 100 ? (
                  <div>
                    <div className="high-risk-recommendation">
                      High Risk Alert: Showing high blood sugar levels is a huge
                      indicator for diabetes as well as several other health
                      conditions. You are considered at risk if your FASTING
                      blood sugar levels exceed 100 mg/dL (5.6 mmol/L) or
                      higher.
                    </div>
                  </div>
                ) : (
                  <div>
                    <div />
                  </div>
                )}
              </div>

              <div className="mets-script">
                Metabolic syndrome is diagnosed if you are showing at least 3
                alerts from the above screening data. This means that you are at
                a higher risk for diabetes and caridovascular disease. If you
                have metabolic syndrome or any of its components, aggressive
                lifestyle changes can delay or even prevent the development of
                serious health problems. If you have any questions about
                Metabolic Syndrome or any eleveated screening results please
                reach out to your personal care provider for further
                consultaion.
              </div>
              <div className="graph-script">
                Reviewing these results with your doctor on a yearly basis will
                help you determin if you are at risk for any potential health
                related issues. It is also important to review historical
                screening data which to look for anomolies. Review the charts
                below with your physician for an in-depth analysis of your
                health history.
              </div>
              <div className="chart-design">
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
