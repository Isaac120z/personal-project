import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

import { getScreeningData } from "../../ducks/screeningdataReducer";

class UpdateProfilePage extends Component {
  constructor() {
    super();

    this.state = {
      currIndex: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleEditSwitch() {}

  handleChange(event) {
    this.setState({ currIndex: event.target.value });
  }

  handleUpdate(event) {}

  componentDidMount() {
    this.props.getScreeningData();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <select value={this.state.currIndex} onChange={this.handleChange}>
          {this.props.screeningData.map((val, i) => {
            console.log(val);
            return (
              <option key={i} value={i}>
                {val.date_of_screening}
              </option>
            );
          })}
        </select>
        <div>
          {this.props.screeningData[this.state.currIndex] ? (
            <div>
              <div>
                <h5>Screening Date</h5>
                {
                  this.props.screeningData[this.state.currIndex]
                    .date_of_screening
                }
              </div>
              <div>
                <h5>Waist Circumference</h5>
                {
                  this.props.screeningData[this.state.currIndex]
                    .waist_circumference
                }
              </div>
              <div>
                <h5>Cholesterol</h5>
                {this.props.screeningData[this.state.currIndex].cholesterol}
              </div>
              <div>
                <h5>Blood Pressure Diastolic</h5>
                {
                  this.props.screeningData[this.state.currIndex]
                    .blood_pressure_diastolic
                }
              </div>
              <div>
                <h5>Blood Pressure Systolic</h5>
                {
                  this.props.screeningData[this.state.currIndex]
                    .blood_pressure_systolic
                }
              </div>
              <div>
                <h5>Triglyceride</h5>
                {this.props.screeningData[this.state.currIndex].triglyceride}
              </div>
              <div>
                <h5>Blood Sugar</h5>
                {this.props.screeningData[this.state.currIndex].blood_sugar}
              </div>

              {/* <button onClick={() => this.handleUpdate(this.props.screeningData[this.state.currIndex].id)}>UPDATE</button> */}
            </div>
          ) : (
            "No data"
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.screeningdataReducer });

export default connect(mapStateToProps, { getScreeningData })(
  UpdateProfilePage
);
