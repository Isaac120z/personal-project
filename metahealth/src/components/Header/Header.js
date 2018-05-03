import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import HeaderStyle from "./HeaderStyle.css";
import { getUser } from "../../ducks/userReducer";

class Header extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <div className="header-bar">
        <div className="logo"> Meta-Health </div>
        {this.props.user.name ? (
          <div>
            <a href={process.env.REACT_APP_LOGOUT}>
              <button>Logout</button>
            </a>
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

export default connect(mapStateToProps, { getUser })(Header);
