import React, { Component } from "react";
import { connect } from "react-redux";
import RegistrationStyle from "./RegistrationStyle.css";
import { Link } from "react-router-dom";
import FlatButton from "material-ui/FlatButton";

import { postFromRegistration } from "../../ducks/screeningdataReducer";

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
    };
    this.handleRegistration = this.handleRegistration.bind(this);
  }

  handleRegistration(prop, val) {
    this.setState({
      [prop]: val
    });
  }

  render() {
    return (
      <div className="registration-page">
        <Link to="/loginlanding">
          <FlatButton label="Back to Nav Page" primary={true} />
        </Link>
        <div className="registration-box">
          <p>Enter New Screening Data</p>
        </div>
        <div>
          <button
            value={this.state.gender}
            onClick={() => this.handleRegistration("gender", "Male")}
          >
            Male
          </button>
          <button
            value={this.state.gender}
            onClick={() => this.handleRegistration("gender", "Female")}
          >
            Female
          </button>
          <input
            placeholder="Screening date YYYY-DD-MM"
            value={this.state.screeningDate}
            onChange={e =>
              this.handleRegistration("screeningDate", e.target.value)
            }
          />
          <input
            placeholder="Waist Circumference"
            value={this.state.waistCircumference}
            onChange={e =>
              this.handleRegistration("waistCircumference", e.target.value)
            }
          />
          <input
            placeholder="Triglycerides"
            value={this.state.triglycerides}
            onChange={e =>
              this.handleRegistration("triglycerides", e.target.value)
            }
          />
          <input
            placeholder="Cholesterol"
            value={this.state.cholesterol}
            onChange={e =>
              this.handleRegistration("cholesterol", e.target.value)
            }
          />
          <input
            placeholder="Blood Pressure Systolic"
            value={this.state.bloodPressureSystolic}
            onChange={e =>
              this.handleRegistration("bloodPressureSystolic", e.target.value)
            }
          />
          <input
            placeholder="Blood Pressure Diastolic"
            value={this.state.bloodPressureDiastolic}
            onChange={e =>
              this.handleRegistration("bloodPressureDiastolic", e.target.value)
            }
          />
          <input
            placeholder="Blood Sugar"
            value={this.state.bloodSugar}
            onChange={e =>
              this.handleRegistration("bloodSugar", e.target.value)
            }
          />
        </div>
        <div>
          <button
            onClick={e =>
              this.props.postFromRegistration(
                this.state.gender,
                this.state.screeningDate,
                Number(this.state.waistCircumference),
                Number(this.state.triglycerides),
                Number(this.state.cholesterol),
                Number(this.state.bloodPressureSystolic),
                Number(this.state.bloodPressureDiastolic),
                Number(this.state.bloodSugar)
              )
            }
          >
            Save
          </button>
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
