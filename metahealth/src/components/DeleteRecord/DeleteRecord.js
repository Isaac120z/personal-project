import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import swal from "sweetalert";

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
      title: "Are you sure you?",
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
    console.log(this.state.currScreening);
  }
  componentDidMount() {
    this.props.getScreeningData();
    //grabs database and stores it in screeningData
  }
  render() {
    console.log(this.props.screeningData);
    console.log(this.state.currScreening);
    return (
      <div>
        <select value={this.state.currIndex} onChange={this.handleChange}>
          {console.log(this.props.screeningData)}
          {this.props.screeningData.map((val, i) => {
            return (
              <option key={i} value={i}>
                {val.date_of_screening}
              </option>
            );
          })}
        </select>

        {/* <button
          onClick={() =>
            this.props.deleteScreeningData(
              this.state.currScreening.user_id,
              this.state.currScreening.id
            )
          }
        >
          Delete Record
        </button> */}
        <button onClick={() => this.confirmScreen()}>Delete</button>
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
                <div>
                  {
                    this.props.screeningData[this.state.currIndex]
                      .waist_circumference
                  }
                </div>
              </div>

              <div>
                <h5>Cholesterol</h5>
                <div>
                  {this.props.screeningData[this.state.currIndex].cholesterol}
                </div>
              </div>

              <div>
                <h5>Blood Pressure Diastolic</h5>
                <div>
                  {
                    this.props.screeningData[this.state.currIndex]
                      .blood_pressure_diastolic
                  }
                </div>
              </div>

              <div>
                <h5>Blood Pressure Systolic</h5>
                <div>
                  {
                    this.props.screeningData[this.state.currIndex]
                      .blood_pressure_systolic
                  }
                </div>
              </div>

              <div>
                <h5>Triglyceride</h5>
                <div>
                  {this.props.screeningData[this.state.currIndex].triglyceride}
                </div>
              </div>

              <div>
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
