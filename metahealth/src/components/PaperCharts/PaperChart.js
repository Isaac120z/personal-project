import React from "react";
import BloodPressureChart from "../Charts/BloodPressureChart";
import CholesterolChart from "../Charts/CholesterolChart";
import WaistCircumferenceChart from "../Charts/WaistCircumferenceChart";
import TriglyceridesChart from "../Charts/TriglyceridesChart";
import BloodSugarChart from "../Charts/BloodSugarChart";
import { Link } from "react-router-dom";
import PaperChartStyle from "../PaperCharts/PaperChartStyle.css";

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import Toggle from "material-ui/Toggle";

class PaperChart extends React.Component {
  constructor() {
    super();
    this.state = {
      waistexpanded: false
    };
  }

  handleWaistExpandChange = waistexpanded => {
    this.setState({ waistexpanded: waistexpanded });
  };

  render() {
    return (
      <div className="paper-chart">
        <div className="waist-circumference-paper-chart">
          <Card
            waistexpanded={this.state.waistexpanded}
            onExpandChange={this.handleWaistExpandChange}
          >
            <CardHeader
              title="Waist Circumference Chart"
              actAsExpander={true}
              showExpandableButton={true}
              titleColor="#3a2936"
            />

            <CardMedia expandable={true}>
              <WaistCircumferenceChart />
            </CardMedia>

            <CardText expandable={true}>
              *The recommendation for the average adult waistline is to be less
              than 35 inches for women and 40 inches for men.
            </CardText>
          </Card>
        </div>

        <div className="triglycerides-paper-chart">
          <Card
            expanded={this.state.expanded}
            onExpandChange={this.handleExpandChange}
          >
            <CardHeader
              title="Triglycerides Chart"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardMedia expandable={true}>
              <TriglyceridesChart />
            </CardMedia>

            <CardText expandable={true}>
              *Triglyceride levels are recommneded to have below 150 milligrams
              per deciliter (mg/dL) or lower.
            </CardText>
          </Card>
        </div>
        <div className="cholesterol-paper-chart">
          <Card
            expanded={this.state.expanded}
            onExpandChange={this.handleExpandChange}
          >
            <CardHeader
              title="HDL Cholesterol Chart"
              actAsExpander={true}
              showExpandableButton={true}
            />

            <CardMedia expandable={true}>
              <CholesterolChart />
            </CardMedia>
            <CardText expandable={true}>
              *Recommended HDL Cholesterol levels are 40mg/dL or LESS for men
              and 50mg/dL or less for women.
            </CardText>
          </Card>
        </div>
        <div className="blood-pressure-paper-chart">
          <Card
            expanded={this.state.expanded}
            onExpandChange={this.handleExpandChange}
          >
            <CardHeader
              title="Blood Pressure Chart"
              actAsExpander={true}
              showExpandableButton={true}
            />

            <CardMedia expandable={true}>
              <BloodPressureChart />
            </CardMedia>

            <CardText expandable={true}>
              *Ideal blood pressure ranges from 90/60 - 120/80. Ranges above
              130/85 are signs of pre-hypertension.
            </CardText>
          </Card>
        </div>

        <div className="blood-sugar-paper-chart">
          <Card
            expanded={this.state.expanded}
            onExpandChange={this.handleExpandChange}
          >
            <CardHeader
              title="Blood Sugar Chart"
              actAsExpander={true}
              showExpandableButton={true}
            />

            <CardMedia expandable={true}>
              <BloodSugarChart />
            </CardMedia>

            <CardText expandable={true}>
              *The recommended fasting blood sugar level is 100mg/dL or lower.
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}

export default PaperChart;
