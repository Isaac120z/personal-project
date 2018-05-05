import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LandingStyle from "./LandingStyle.css";
import { getReportingScreeningData } from "../../ducks/screeningdataReducer";
// import { getUser } from "../../ducks/userReducer";
import Checkout from "../Checkout/Checkout";
import Paper from "material-ui/Paper";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <div className="bold-statement">Keep Track Of Your Health!</div>
        <div className="info-box">
          <div className="box-one">
            <div />
            <div className="text-one">
              A place to keep your medical records{" "}
            </div>
            <div className="text-two">
              You may change medical providers, but you will always have your
              health stats with you.
            </div>
          </div>
          <div className="box-two">
            <div />
            <div className="text-one">Understand your health risks</div>
            <div className="text-two">
              Enter biometric screening results from your annual physical and
              access immmediate healh risk data.
            </div>
          </div>

          <div className="box-three">
            <div />
            <div className="text-one">View charts of year over year data </div>
            <div className="text-two">
              Review past screening data showing trends to help you identify
              improvment.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.screeningdataReducer });

export default connect(mapStateToProps, { getReportingScreeningData })(
  LandingPage
);

// class LandingPage extends Component {
//   constructor() {
//     super();
//   }

//   componentDidMount() {
//     this.props.getReportingScreeningData();
//   }
//   render() {
//     console.log(this.props);
//     console.log(this.props.currentScreeningData);
//     return (
//       <div className="landing-page">
//         {this.props.currentScreeningData.gender ? (
//           <div>
//             <p>
//               {this.props.currentScreeningData.name} &
//               {this.props.currentScreeningData.authid}
//             </p>

//             <div className="link-wrap">
//               <Link to="/reporting">
//                 <button>Reporting </button>
//               </Link>
//               <Link to="/Registration">
//                 <button>Registration </button>
//               </Link>
//               <Link to="/updateprofile">
//                 <button>Update Profile</button>
//               </Link>
//               <Link to="/delete">
//                 <button>Delete Record</button>
//               </Link>
//             </div>
//           </div>
//         ) : (
//           <div />
//         )}
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({ ...state.screeningdataReducer });

// export default connect(mapStateToProps, { getReportingScreeningData })(
//   LandingPage
// );

// class LandingPage extends Component {
//   componentDidMount() {
//     this.props.getUser();
//   }
//   render() {
//     console.log(this.props);
//     console.log(this.props.user.name);
//     return (
//       <div>
//         {this.props.user.name ? (
//           <div>
//             <p>
//               {this.props.user.name} & {this.props.user.authid}
//             </p>

//             <div className="link-wrap">
//               <Link to="/reporting">
//                 <button>Reporting </button>
//               </Link>
//               <Link to="/Registration">
//                 <button>Registration </button>
//               </Link>
//               <Link to="/updateprofile">
//                 <button>Update Profile</button>
//               </Link>
//               <Link to="/delete">
//                 <button>Delete Record</button>
//               </Link>
//             </div>
//           </div>
//         ) : (
//           <div />
//         )}
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({ ...state.userReducer });

// export default connect(mapStateToProps, { getUser })(LandingPage);
