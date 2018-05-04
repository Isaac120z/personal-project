import React, { Component } from "react";
import AboutStyle from "./AboutStyle.css";
import { withGoogleMap, GoogleMap } from "react-google-maps";
import Checkout from "../Checkout/Checkout";

class AboutPage extends Component {
  render() {
    return (
      <div>
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

//   const GoogleMapExample = withGoogleMap(props => (
//       <GoogleMap
//         defatultCenter={{ lat: 40.756795, lng: -73.954298 }}
//         defaultZoom={13}
//       />
//     ));

// <div>
//         <GoogleMapExample
//           containerElement={<div style={{ height: `500px`, width: "500px" }} />}
//           mapElement={<div style={{ height: `100%` }} />}
//         />
//       </div>
