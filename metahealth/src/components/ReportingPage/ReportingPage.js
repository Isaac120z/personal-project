import React, {Component} from 'react';
import {connect} from "react-redux";
import axios from "axios"

import { getReportingScreeningData } from "../../ducks/screeningdataReducer";

class ReportingPage extends Component{
    componentDidMount() {
        this.props.getReportingScreeningData();
    }
    render() {
        console.log(this.props)
        return (
          <div>
            {this.props.screeningData.map((val, i) => (
             <div key={i}>
                   <h1>{val.cholesterol}</h1>
            </div>
               ))
             }
      
           </div> 
        );
      }
    }
    
const mapStateToProps = state => ({ ...state.screeningdataReducer });

export default connect(mapStateToProps, { getReportingScreeningData })(ReportingPage);