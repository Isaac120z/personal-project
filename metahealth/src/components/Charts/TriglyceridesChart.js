import React, { Component } from "react";
import { Bar, Line } from "react-chartjs-2";
import axios from "axios";
import { connect } from "react-redux";
import { getScreeningData } from "../../ducks/screeningdataReducer";
import _ from "lodash.map";

class TriglyceridesChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {}
    };
  }

  componentDidMount() {
    this.props.getScreeningData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.screeningData !== this.props.screeningData) {
      let triglycerideData = this.props.screeningData.map(
        e => (e = e.triglyceride)
      );
      let screeningDate = this.props.screeningData.map(
        e =>
          (e = e.date_of_screening
            .split("")
            .splice(0, 10)
            .join(""))
      );
      console.log(triglycerideData);
      console.log(screeningDate);

      const chartData = {
        labels: screeningDate,
        datasets: [
          {
            label: "Triglycerides mg/dL",
            data: triglycerideData,
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 7,
            backgroundColor: ["red"]
          }
        ]
      };
      this.setState({ chartData });
    }
  }

  render() {
    console.log(this.props.screeningData);
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          options={{
            maintainAspectRatio: false,
            scales: {
              xAxes: [
                {
                  type: "time",
                  time: {
                    displayFormats: {
                      month: "MMM YYYY"
                    }
                  }
                }
              ]
            },
            title: {
              display: true,
              text: "Triglyceride Levels By Year",
              fontSize: 25
            },
            legend: {
              display: true,
              position: "top"
            }
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.screeningDataReducer,
  screeningData: state.screeningdataReducer.screeningData
});

export default connect(mapStateToProps, { getScreeningData })(
  TriglyceridesChart
);
