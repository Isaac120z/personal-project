import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LandingStyle from "./LandingStyle.css";
import { getReportingScreeningData } from "../../ducks/screeningdataReducer";
// import { getUser } from "../../ducks/userReducer";
import Checkout from "../Checkout/Checkout";

class LandingPage extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getReportingScreeningData();
  }

  render() {
    return (
      <div>
        {this.props.currentScreeningData.map((val, i) => (
          <div key={i}>
            <div className="welcome"> Welcome {val.name}</div>
          </div>
        ))}
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
