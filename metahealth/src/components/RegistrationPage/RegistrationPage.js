import React, {Component} from 'react';
import { connect } from "react-redux";

import { postFromRegistration } from "../../ducks/screeningdataReducer";

class RegistrationPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            gender: "",
            screeningDate: "",
            triglycerides: '',
            bloodPressureSystolic: " ",
            bloodPressureDiastolic: " ",
            bloodSugar: ''
        }
        this.handleRegistration = this.handleRegistration.bind(this)
        // this.updateGender= this.updateGender.bind(this);
        // this.updateScreeningDate = this.updateScreeningDate.bind(this);
        // this.updateTriglycerides = this.updateTriglycerides.bind(this);
        // this.updateBloodPressureSystolic =  this.updateBloodPressureSystolic.bind(this);
        // this.updateBloodPressureDiastolic = this.updateBloodPressureDiastolic.bind(this);
        // this.updateScreeningDate = this.updateScreeningDate.bind(this);
        // this.updateScreeningDate = this.updateScreeningDate.bind(this);

    }  

    handleRegistration(prop, val) {
       this.setState({
           [prop]: val
       })
    }
    //  updateGender(val){
    //     this.setState({
    //         gender: val
    //     })
    // }
    // updateScreeningDate(val){
    //     this.setState({
    //         screeningDate: val
    //     })
    // }
    // updateTriglycerides(val){
    //     this.setState({
    //         triglycerides: val
    //     })
    // }
    
    // updateBloodPressureSystolic(val){
    //     this.setState({
    //         bloodPressureSystolic: val
    //     })
    // }
    // updateBloodPressureDiastolic(val){
    //     this.setState({
    //         bloodPressureDiastolic: val
    //     })
    // }


    // updateBloodSugar(val){
    //     this.setState({
    //         bloodSugar: val
    //     })
    // }

  
  render() {
    // let {updateGender,updateScreeningDate,updateTriglycerides,updateBloodPressureSystolic,updateBloodPressureDiastolic,updateBloodSugar} = this.state;
    return (
        <div>
        <div>
            <p>Registration Box</p>
        </div>
        <div>
            <button value={this.state.gender} onClick={()=> this.handleRegistration('gender', "Male")}>Male</button>
            <button value={this.state.gender} onClick={()=> this.handleRegistration('gender', "Female")}>Female</button>
            <input placeholder="Date of Screening" value={this.state.screeningDate} onChange={(e) => this.handleRegistration('screeningDate', e.target.value)}/>
            <input placeholder="Triglycerides" value={this.state.triglycerides} onChange={(e) => this.handleRegistration('triglycerides', e.target.value)}/>
            <input placeholder="Blood Pressure Systolic" value={this.state.bloodPressureSystolic} onChange={(e) => this.handleRegistration('bloodPressureSystolic', e.target.value)}/>
            <input placeholder="Blood Pressure Diastolic" value={this.state.bloodPressureDiastolic} onChange={(e) => this.handleRegistration('bloodPressureDiastolic', e.target.value)}/>
           <input placeholder="Blood Sugar" value={this.state.bloodSugar} onChange={(e) => this.handleRegistration('bloodSugar', e.target.value)}/>
        </div>
        <div>
            <button onClick={(e)=> this.props.postFromRegistration(
                    this.state.gender,
                    this.state.screeningDate,
                    this.state.triglycerides,
                    this.state.bloodPressureSystolic,
                    this.state.bloodPressureDiastolic,
                    this.state.bloodSugar
            )}>Save</button>
        </div>
  </div>
    )
  }
}




const mapStateToProps = state => {
    return { 
    gender: state.gender,
    screeningDate: state.screeningDate,
    triglycerides: state.triglycerides,
    bloodPressureSystolic: state.bloodPressureSystolic,
    bloodPressureDiastolic: state.bloodPressureDiastolic,
    bloodSugar: state.bloodSugar
}}; 


export default connect(mapStateToProps, { postFromRegistration })(RegistrationPage);





