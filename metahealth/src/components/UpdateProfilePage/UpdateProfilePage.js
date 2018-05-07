import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import UpdateProfilePageStyle from "./UpdateProfilePageStyle.css";
import DeleteRecord from "../DeleteRecord/DeleteRecord";
import { Link } from "react-router-dom";
import FlatButton from "material-ui/FlatButton";
import swal from "sweetalert";

import {
  getScreeningData,
  updateScreeningData
} from "../../ducks/screeningdataReducer";

class UpdateProfilePage extends Component {
  constructor() {
    super();

    this.state = {
      currIndex: 0,
      editData: false,

      waist_circumference: "",
      cholesterol: "",
      blood_pressure_diastolic: "",
      blood_pressure_systolic: "",
      triglyceride: "",
      blood_sugar: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleEditSwitch = this.handleEditSwitch.bind(this);
  }

  inputChange(prop, val) {
    this.setState({ [prop]: val });
  }

  handleEditSwitch() {
    this.setState({ editData: !this.state.editData });
  }

  handleChange(event) {
    this.setState({ currIndex: event.target.value });
    this.updateData(event.target.value);
  }

  updateData(index) {
    this.setState({
      waist_circumference: this.props.screeningData[index].waist_circumference,
      cholesterol: this.props.screeningData[index].cholesterol,
      blood_pressure_diastolic: this.props.screeningData[index]
        .blood_pressure_diastolic,
      blood_pressure_systolic: this.props.screeningData[index]
        .blood_pressure_systolic,
      triglyceride: this.props.screeningData[index].triglyceride,
      blood_sugar: this.props.screeningData[index].blood_sugar
    });
  }

  handleUpdate() {
    // console.log("THIS IS WHERE I UPDATE MY BACKEND");
    this.props.updateScreeningData(
      this.state.waist_circumference,
      this.state.cholesterol,
      this.state.blood_pressure_diastolic,
      this.state.blood_pressure_systolic,
      this.state.triglyceride,
      this.state.blood_sugar,
      this.props.screeningData[this.state.currIndex].id
    );
    this.handleEditSwitch();
    swal("Success!", "Your screening data is saved", "success");
  }

  componentDidMount() {
    this.props.getScreeningData().then(resp => {
      if (this.props.screeningData.length) {
        this.updateData(this.state.currIndex);
      }
    });
  }

  render() {
    console.log(this.props.screeningData);

    return (
      <div>
        <div className="nav-button">
          <Link to="/loginlanding">
            <FlatButton label="Back to Nav Page" primary={true} />
          </Link>
        </div>
        <div className="all-records">
          {/* <Link to="/loginlanding">
          <FlatButton label="Back to Nav Page" primary={true} />
        </Link> */}
          <div className="update-box">
            <div>Update by clicking "edit" then "save"</div>
            <select value={this.state.currIndex} onChange={this.handleChange}>
              {this.props.screeningData.map((val, i) => {
                return (
                  <option key={i} value={i}>
                    {val.date_of_screening
                      .split("")
                      .splice(0, 10)
                      .join("")}
                    {/* check for extra 0s */}
                  </option>
                );
              })}
            </select>

            {this.state.editData ? (
              <button onClick={() => this.handleUpdate()}>SAVE</button>
            ) : (
              <button onClick={() => this.handleEditSwitch()}>EDIT</button>
            )}

            {this.props.screeningData[this.state.currIndex] ? (
              <div>
                <div className="box screening-date-update-page">
                  <h5>Screening Date</h5>
                  {this.props.screeningData[
                    this.state.currIndex
                  ].date_of_screening
                    .split("")
                    .splice(0, 10)
                    .join("")}
                </div>
                <div className="box waist-circumference">
                  <h5>Waist Circumference</h5>
                  {this.state.editData ? (
                    <input
                      type="number"
                      value={this.state.waist_circumference}
                      onChange={e =>
                        this.inputChange("waist_circumference", e.target.value)
                      }
                    />
                  ) : (
                    <div>
                      {
                        this.props.screeningData[this.state.currIndex]
                          .waist_circumference
                      }
                    </div>
                  )}
                </div>
                <div className="box triglyceride">
                  <h5>Triglyceride</h5>
                  {this.state.editData ? (
                    <input
                      type="number"
                      value={this.state.triglyceride}
                      onChange={e =>
                        this.inputChange("triglyceride", e.target.value)
                      }
                    />
                  ) : (
                    <div>
                      {
                        this.props.screeningData[this.state.currIndex]
                          .triglyceride
                      }
                    </div>
                  )}
                </div>
                <div className="box triglyceride">
                  <h5>Cholesterol</h5>
                  {this.state.editData ? (
                    <input
                      type="number"
                      value={this.state.cholesterol}
                      onChange={e =>
                        this.inputChange("cholesterol", e.target.value)
                      }
                    />
                  ) : (
                    <div>
                      {
                        this.props.screeningData[this.state.currIndex]
                          .cholesterol
                      }
                    </div>
                  )}
                </div>

                <div className="box blood-pressure-sys">
                  <h5>Blood Pressure Systolic</h5>
                  {this.state.editData ? (
                    <input
                      type="number"
                      value={this.state.blood_pressure_systolic}
                      onChange={e =>
                        this.inputChange(
                          "blood_pressure_systolic",
                          e.target.value
                        )
                      }
                    />
                  ) : (
                    <div>
                      {
                        this.props.screeningData[this.state.currIndex]
                          .blood_pressure_systolic
                      }
                    </div>
                  )}
                </div>

                <div className="box blood-pressure-dia">
                  <h5>Blood Pressure Diastolic</h5>
                  {this.state.editData ? (
                    <input
                      type="number"
                      value={this.state.blood_pressure_diastolic}
                      onChange={e =>
                        this.inputChange(
                          "blood_pressure_diastolic",
                          e.target.value
                        )
                      }
                    />
                  ) : (
                    <div>
                      {
                        this.props.screeningData[this.state.currIndex]
                          .blood_pressure_diastolic
                      }
                    </div>
                  )}
                </div>

                <div className="box blood-sugar">
                  <h5>Blood Sugar</h5>
                  {this.state.editData ? (
                    <input
                      type="number"
                      value={this.state.blood_sugar}
                      onChange={e =>
                        this.inputChange("blood_sugar", e.target.value)
                      }
                    />
                  ) : (
                    <div>
                      {
                        this.props.screeningData[this.state.currIndex]
                          .blood_sugar
                      }
                    </div>
                  )}
                </div>

                {/* <button onClick={() => this.handleUpdate(this.props.screeningData[this.state.currIndex].id)}>UPDATE</button> */}
              </div>
            ) : (
              "No data"
            )}
          </div>
          <div>
            <DeleteRecord />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.screeningdataReducer });

export default connect(mapStateToProps, {
  getScreeningData,
  updateScreeningData
})(UpdateProfilePage);
