import React, { Component } from "react";
import { Bar, Line } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Dallas"],
        datasets: [
          {
            label: "Population",
            data: [2013, 15, 20, 25, 35],
            backgroundColor: [
              "black",
              "blue",
              "yellow",
              "purple",
              "violet",
              "indigo",
              "aqua"
            ]
          }
        ]
      }
    };
  }
  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            maintainAspectRatio: true,
            scales: {
              xAxes: [
                {
                  type: "time",
                  time: {
                    displayFormats: {
                      year: "YYYY"
                    }
                  }
                }
              ]
            },
            title: {
              display: true,
              text: "Largest Cities in Texas",
              fontSize: 25
            },
            legend: {
              display: true,
              position: "right"
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
