import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import swal from "sweetalert";
import RaisedButton from "material-ui/RaisedButton";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

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
    this.handleChange = (event, idex, value) => this.setState({ value });
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
    console.log(this.state.currScreening);
  }
  componentDidMount() {
    this.props.getScreeningData();
    //grabs database and stores it in screeningData
  }
  render() {
    console.log(this.props.screeningData);
    console.log(this.state.currScreening);
    console.log();
    return (
      <div>
        Select Screening Date
        <selectField value={this.state.currIndex} onChange={this.handleChange}>
          {console.log(this.props.screeningData)}
          {this.props.screeningData.map((val, i) => {
            return (
              <option key={i} value={i}>
                {console.log(val.date_of_screening.split("").splice(0, 10))}
                {val.date_of_screening.split("").splice(0, 10)}
              </option>
            );
          })}
        </selectField>
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
        <RaisedButton onClick={() => this.confirmScreen()} label="Delete" />
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
