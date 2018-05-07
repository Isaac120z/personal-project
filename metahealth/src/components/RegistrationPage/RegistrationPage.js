import React, { Component } from "react";
import { connect } from "react-redux";
import RegistrationStyle from "./RegistrationStyle.css";
import { Link } from "react-router-dom";
import FlatButton from "material-ui/FlatButton";
import swal from "sweetalert";
import { postFromRegistration } from "../../ducks/screeningdataReducer";
import RaisedButton from "material-ui/RaisedButton";

class RegistrationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "",
      screeningDate: "",
      waistCircumference: "",
      triglycerides: "",
      cholesterol: "",
      bloodPressureSystolic: "",
      bloodPressureDiastolic: "",
      bloodSugar: ""
      // labelColor: "gray"
    };
    this.handleRegistration = this.handleRegistration.bind(this);
    // this.handleButtonColor = this.handleButtonColor.bind(this);
  }

  // handleButtonColor() {
  //   this.setState({
  //     labelColor: "black"
  //   });
  //   console.log(this.state.labelColor);
  // }

  handleRegistration(prop, val) {
    this.setState({
      [prop]: val
    });
    // this.setState({
    //   labelColor: "green"
    // });
  }

  render() {
    return (
      <div className="registration-page">
        <Link to="/loginlanding">
          <FlatButton label="Back to Nav Page" primary={true} />
        </Link>
        <div className="registration-text">
          <p>Enter New Screening Data</p>
        </div>
        <div className="data-box">
          <div className="gender-box screen-row">
            <p> Select male or female</p>
            <div className="input-box">
              <div>
                <RaisedButton
                  value={this.state.gender}
                  onClick={() => this.handleRegistration("gender", "Male")}
                  label="Male"
                  // labelColor={this.state.labelColor.toString()}
                />

                <RaisedButton
                  value={this.state.gender}
                  onClick={() => this.handleRegistration("gender", "Female")}
                  label="Female"
                />
              </div>
            </div>
          </div>
          <div className="screening-date-box screen-row">
            <p>Enter New Screening Datevin the following format "YYYY-DD-MM"</p>
            <div className="input-box">
              <input
                placeholder="YYYY-DD-MM"
                value={this.state.screeningDate}
                onChange={e =>
                  this.handleRegistration("screeningDate", e.target.value)
                }
              />
            </div>
          </div>
          <div className="waist-circumference-box screen-row">
            <p> Enter waist circumference measuring in inches</p>
            <div className="input-box">
              <input
                placeholder="Waist Circumference"
                value={this.state.waistCircumference}
                onChange={e =>
                  this.handleRegistration("waistCircumference", e.target.value)
                }
              />
            </div>
          </div>
          <div className="triglycerides-box screen-row">
            <p>
              {" "}
              Enter triglycerides measurement in milligarms per deciliter
              (mg/dL)
            </p>
            <div className="input-box">
              <input
                placeholder="Triglycerides"
                value={this.state.triglycerides}
                onChange={e =>
                  this.handleRegistration("triglycerides", e.target.value)
                }
              />
            </div>
          </div>
          <div className="cholesterol-box screen-row">
            <p> Enter HDL cholesterol in milligrams per deciliter (mg/dL)</p>
            <div className="input-box">
              <input
                placeholder="HDL Cholesterol"
                value={this.state.cholesterol}
                onChange={e =>
                  this.handleRegistration("cholesterol", e.target.value)
                }
              />
            </div>
          </div>
          <div className="systolic-box screen-row">
            <p>
              {" "}
              Enter systolic blood pressure in millimeters of mercury (mm Hg)
            </p>
            <div className="input-box">
              <input
                placeholder="Blood Pressure Systolic"
                value={this.state.bloodPressureSystolic}
                onChange={e =>
                  this.handleRegistration(
                    "bloodPressureSystolic",
                    e.target.value
                  )
                }
              />
            </div>
          </div>
          <div className="diastolic-box screen-row">
            <p>
              {" "}
              Enter diastolic blood pressure in millimeters of mercury (mm Hg)
            </p>
            <div className="input-box">
              <input
                placeholder="Blood Pressure Diastolic"
                value={this.state.bloodPressureDiastolic}
                onChange={e =>
                  this.handleRegistration(
                    "bloodPressureDiastolic",
                    e.target.value
                  )
                }
              />
            </div>
          </div>
          <div className="sugar-box screen-row">
            <p>
              {" "}
              Enter FASTING blood sugar in milligrams per deciliter (mg/dL){" "}
            </p>
            <div className="input-box">
              <input
                placeholder="Blood Sugar"
                value={this.state.bloodSugar}
                onChange={e =>
                  this.handleRegistration("bloodSugar", e.target.value)
                }
              />
            </div>
          </div>
        </div>
        <div className="save-button">
          <RaisedButton
            onClick={e => {
              this.props
                .postFromRegistration(
                  this.state.gender,
                  this.state.screeningDate,
                  Number(this.state.waistCircumference),
                  Number(this.state.triglycerides),
                  Number(this.state.cholesterol),
                  Number(this.state.bloodPressureSystolic),
                  Number(this.state.bloodPressureDiastolic),
                  Number(this.state.bloodSugar)
                )
                .then(() =>
                  swal("Success!", "Your screening data is saved", "success")
                );
            }}
            label="SAVE"
          />
          {/* Save
          </button> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gender: state.gender,
    screeningDate: state.screeningDate,
    waistCircumference: state.waistCircumference,
    triglycerides: state.triglycerides,
    bloodPressureSystolic: state.bloodPressureSystolic,
    bloodPressureDiastolic: state.bloodPressureDiastolic,
    bloodSugar: state.bloodSugar
  };
};

export default connect(mapStateToProps, { postFromRegistration })(
  RegistrationPage
);
