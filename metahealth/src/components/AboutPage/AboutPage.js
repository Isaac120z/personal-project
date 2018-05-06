import React, { Component } from "react";
import AboutStyle from "./AboutStyle.css";
// import { withGoogleMap, GoogleMap } from "react-google-maps";
import Checkout from "../Checkout/Checkout";

class AboutPage extends Component {
  render() {
    return (
      <div>
        <div>
          Meta-Heatlh is a convenient way to take track of medical resutls and
          to find out if you are at risk for metabolic syndrome.{" "}
        </div>
        <div>What is Metabolic syndrome? </div>
        <div>
          Metabolic syndrome is a cluster of conditions — increased blood
          pressure, high blood sugar, excess body fat around the waist, and
          abnormal cholesterol or triglyceride levels — that occur together,
          increasing your risk of heart disease, stroke and diabetes. Having
          just one of these conditions doesn't mean you have metabolic syndrome.
          However, any of these conditions increase your risk of serious
          disease. Having more than one of these might increase your risk even
          more. If you have metabolic syndrome or any of its components,
          aggressive lifestyle changes can delay or even prevent the development
          of serious health problems.{" "}
        </div>
        <div> What is the criteria for metabolic syndrome?</div>
        <div>
          Large waist circumference that measures at least 35 inches (89
          centimeters) for women and 40 inches (102 centimeters) for men{" "}
        </div>
        <div>
          High triglyceride level exceeding 150 milligrams per
          deciliter,(mg/dL), or 1.7 millimoles per liter (mmol/L), or higher of
          this type of fat found in blood{" "}
        </div>
        <div>
          High-density lipoprotein (HDL) cholesterol levels less than 40 mg/dL
          (1.04 mmol/L) in men or less than 50 mg/dL (1.3 mmol/L) in women of
          this "good" cholesterol
        </div>
        <div>
          Increased blood pressure of 130/85 millimeters of mercury (mm Hg) or
          higher{" "}
        </div>
        <div>Elevated fasting blood sugar levels of mg/dL or higher</div>
        <div>
          The Meta-Health app will have several new features added with your
          support. Feel free to donate to the development of the webiste by
          clicking the button below.
        </div>
        <div className="donate-button">
          <Checkout
            name={"Help improve our site!"}
            description={"Thank you for your contribution!"}
            amount={1}
          />
        </div>
      </div>
    );
  }
}

export default AboutPage;
