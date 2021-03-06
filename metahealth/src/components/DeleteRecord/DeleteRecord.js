import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import swal from "sweetalert";
import RaisedButton from "material-ui/RaisedButton";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import DeleteRecordStyle from "./DeleteRecordStyle.css";

import {
  getScreeningData,
  deleteScreeningData
} from "../../ducks/screeningdataReducer";

class DeleteRecord extends Component {
  constructor() {
    super();

    this.state = {
      currIndex: 0,
      currScreening: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.confirmScreen = this.confirmScreen.bind(this);
    //// this.handleChange = (event, idex, value) => this.setState({ value });
  }

  handleChange(event) {
    this.setState({
      currIndex: event.target.value
    });
  }
  confirmScreen() {
    this.setState({
      currScreening: this.props.screeningData[this.state.currIndex]
    });
    swal({
      title: "Are you sure you wanted to delete your record?",
      text: "All screening data will be lost!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        this.props.deleteScreeningData(
          this.state.currScreening.user_id,
          this.state.currScreening.id
        );
      } else {
        swal("No changes made!");
      }
    });
  }
  componentDidMount() {
    this.props.getScreeningData();
    //grabs database and stores it in screeningData
  }
  render() {
    return (
      <div className="delete-page">
        <div className="delete-box">
          <div>
            <div>
              Select screening date then click "delete" to remove record
            </div>
            <select value={this.state.currIndex} onChange={this.handleChange}>
              {console.log(this.props.screeningData)}
              {this.props.screeningData.map((val, i) => {
                return (
                  <option key={i} value={i}>
                    {val.date_of_screening
                      .split("")
                      .splice(0, 10)
                      .join("")}
                  </option>
                );
              })}
            </select>
            <button onClick={() => this.confirmScreen()}>DELETE</button>
          </div>

          {this.props.screeningData[this.state.currIndex] ? (
            <div>
              <div className="box screening-date-delete">
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
                <div>
                  {
                    this.props.screeningData[this.state.currIndex]
                      .waist_circumference
                  }
                </div>
              </div>

              <div className="box triglyceride">
                <h5>Triglyceride</h5>
                <div>
                  {this.props.screeningData[this.state.currIndex].triglyceride}
                </div>
              </div>

              <div className="box cholesterol">
                <h5>Cholesterol</h5>
                <div>
                  {this.props.screeningData[this.state.currIndex].cholesterol}
                </div>
              </div>

              <div className="box blood-pressure-sys">
                <h5>Blood Pressure Systolic</h5>
                <div>
                  {
                    this.props.screeningData[this.state.currIndex]
                      .blood_pressure_systolic
                  }
                </div>
              </div>

              <div className="box blood-pressure-dia">
                <h5>Blood Pressure Diastolic</h5>
                <div>
                  {
                    this.props.screeningData[this.state.currIndex]
                      .blood_pressure_diastolic
                  }
                </div>
              </div>

              <div className="box blood-sugar">
                <h5>Blood Sugar</h5>
                <div>
                  {this.props.screeningData[this.state.currIndex].blood_sugar}
                </div>
              </div>
            </div>
          ) : (
            "No data"
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.screeningdataReducer,
  screeningData: state.screeningdataReducer.screeningData
});

export default connect(mapStateToProps, {
  getScreeningData,
  deleteScreeningData
})(DeleteRecord);
