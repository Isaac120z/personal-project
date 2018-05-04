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
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        {this.props.user.name ? (
          <div>
            <a href={process.env.REACT_APP_LOGOUT}>
              <button className="Logout">Logout</button>
            </a>
          </div>
        ) : (
          <div>
            <a href={process.env.REACT_APP_LOGIN}>
              <button className="login">Login</button>
            </a>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.userReducer });

export default connect(mapStateToProps, { getUser })(Header);
