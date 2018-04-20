import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getUser } from "../../ducks/userReducer";

class LandingPage extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.user.name ? (
          <div>
            <p>
              {this.props.user.name} & {this.props.user.authid}
            </p>

            <div className="link-wrap">
              <a href={process.env.REACT_APP_LOGOUT}>
                <button>Logout</button>
              </a>
              <Link to="/reporting">
                <button>Reporting </button>
              </Link>
              <Link to="/Registration">
                <button>Registration </button>
              </Link>
              <Link to="/updateprofile">
                <button>Update Profile</button>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <a href={process.env.REACT_APP_LOGIN}>
              <button>Login</button>
            </a>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.userReducer });

export default connect(mapStateToProps, { getUser })(LandingPage);
