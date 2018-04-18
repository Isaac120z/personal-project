import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import About from './components/About/About';

const Header = props => (
    <div>
    <div><Link to ="/"><button>Home</button></Link></div>
    </div>
);

{/* // const mapStateToProps = state => ({...state.productReducer}); */}

export default Header;