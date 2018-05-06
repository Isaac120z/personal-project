import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import HeaderStyle from "./HeaderStyle.css";
import { getUser } from "../../ducks/userReducer";
import metaicon from "./metaicon.png";

class Header extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <div className="header-bar">
        <div className="logo">
          <img className="icon" src={metaicon} />
          <div className="meta-health">Meta-Health</div>
        </div>
        <div className="buttons">
          <Link to="/">
            <button className="home-button">Home</button>
          </Link>
          <Link to="/about">
            <button className="about-button">About</button>
          </Link>
          {this.props.user.name ? (
            <div>
              <Link to="/loginlanding">
                <button className="login-home-page">NAV PAGE</button>
              </Link>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.userReducer });

export default connect(mapStateToProps, { getUser })(Header);
