import React, { Component } from "react";
import AboutStyle from "./AboutStyle.css";
// import { withGoogleMap, GoogleMap } from "react-google-maps";
import Checkout from "../Checkout/Checkout";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import PaperChartStyle from "../PaperCharts/PaperChartStyle.css";

class AboutPage extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
  }

  handleExpandChange = expanded => {
    this.setState({ expanded: expanded });
  };
  render() {
    return (
      <div className="about-page">
        <div className="opening">
          Meta-Heatlh is a convenient way to take track of your biometric
          screening results and to find out if you are at risk for metabolic
          syndrome. Even if you change medical providers you will always have
          access to your historical medical records, which can become invaluable
          in trying to understand your health trends. Noticing uncommon trends
          in your health charts can help you correct a potential life
          threatening illness before its too late. Meta-Health can also help you
          identify your risk of metabolic syndrome. Having metabolic syndrome
          can increase your risk of diabetes by five times and double your risk
          for heart disease.
        </div>

        <div>Frequently asked questions:</div>
        <div className="question-one">
          <Card
            waistexpanded={this.state.expanded}
            onExpandChange={this.handleExpandChange}
          >
            <CardHeader
              title="What is metabolic syndrome?"
              actAsExpander={true}
              showExpandableButton={true}
            />

            <CardMedia expandable={true} />
            <CardText expandable={true}>
              Metabolic syndrome is a cluster of conditions — increased blood
              pressure, high blood sugar, excess body fat around the waist, and
              abnormal cholesterol or triglyceride levels — that occur together,
              increasing your risk of heart disease, stroke and diabetes. Having
              just one of these conditions doesn't mean you have metabolic
              syndrome. However, any of these conditions increase your risk of
              serious disease. Having more than one of these might increase your
              risk even more. If you have metabolic syndrome or any of its
              components, aggressive lifestyle changes can delay or even prevent
              the development of serious health problems.
            </CardText>
          </Card>
        </div>

        <div className="question-two">
          <Card
            waistexpanded={this.state.expanded}
            onExpandChange={this.handleExpandChange}
          >
            <CardHeader
              title="What is the criteria for metabolic syndrome?"
              actAsExpander={true}
              showExpandableButton={true}
            />

            <CardMedia expandable={true} />
            <CardText expandable={true}>
              <div>
                1) Large waist circumference that measures at least 35 inches
                (89 centimeters) for women and 40 inches (102 centimeters) for
                men
              </div>
              <div>
                2) High triglyceride level exceeding 150 milligrams per
                deciliter,(mg/dL), or 1.7 millimoles per liter (mmol/L), or
                higher of this type of fat found in blood{" "}
              </div>
              <div>
                3) High-density lipoprotein (HDL) cholesterol levels less than
                40 mg/dL (1.04 mmol/L) in men or less than 50 mg/dL (1.3 mmol/L)
                in women of this "good" cholesterol
              </div>
              <div>
                4) Increased blood pressure of 130/85 millimeters of mercury (mm
                Hg) or higher{" "}
              </div>
              <div>
                5) Elevated fasting blood sugar levels of mg/dL or higher
              </div>
            </CardText>
          </Card>
        </div>
        <div className="question-three">
          <Card
            waistexpanded={this.state.expanded}
            onExpandChange={this.handleExpandChange}
          >
            <CardHeader
              title="What is a biometric screening?"
              actAsExpander={true}
              showExpandableButton={true}
            />

            <CardMedia expandable={true} />
            <CardText expandable={true}>
              <div>
                A biometric screening is a clinical process that examines key
                indicators to determine your current health risks. Multiple
                screenings, over time, compare results showing increases or
                decreases in risk.
              </div>
              <div>
                Biometric screenings are typically given by your primary
                physician as part of your annual physical.
              </div>
            </CardText>
          </Card>
        </div>
        <div className="question-four">
          <Card
            waistexpanded={this.state.expanded}
            onExpandChange={this.handleExpandChange}
          >
            <CardHeader
              title="How often should I get a screening?"
              actAsExpander={true}
              showExpandableButton={true}
            />

            <CardMedia expandable={true} />
            <CardText expandable={true}>
              <div>
                You should have a screening performed at least once a year. If
                you are at risk of metabolic syndrome or show elevated levels
                from your biometric screening results it is best to discuss
                these with your primary physician.
              </div>
            </CardText>
          </Card>
        </div>
        <div className="question-five">
          <Card
            waistexpanded={this.state.expanded}
            onExpandChange={this.handleExpandChange}
          >
            <CardHeader
              title="What are the benefits of using Meta-Health?"
              actAsExpander={true}
              showExpandableButton={true}
            />

            <CardMedia expandable={true} />
            <CardText expandable={true}>
              <div>
                You are able to record screening data and recieve immediate
                health risk information regarding your biometric screening data.
                You also have access to charts that show year over year data of
                your biometric screening data. Seeing these trends on easy read
                charts helps you identify areas of improvement. These tools can
                empower you when speaking with your physician about your health
                concerns.
              </div>
              <div>
                Having access to your medical records can also save you from the
                hassle of retrieving if you ever switch to a new physician.{" "}
              </div>
            </CardText>
          </Card>
        </div>
        <div className="question-six">
          <Card
            waistexpanded={this.state.expanded}
            onExpandChange={this.handleExpandChange}
          >
            <CardHeader
              title="Is Meta-Health a free service?"
              actAsExpander={true}
              showExpandableButton={true}
            />

            <CardMedia expandable={true} />
            <CardText expandable={true}>
              <div>
                Yes! You are able to use Meta-Health free of charge. However, if
                you would like to support Meta-Health for future enhancements
                feel free to donate by clicking the button below.
                <div className="donate-button">
                  <Checkout
                    name={"Help improve our site!"}
                    description={"Thank you for your contribution!"}
                    amount={1}
                  />
                </div>
              </div>
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}

export default AboutPage;
