import axios from "axios";

const GET_SCREENINGDATA = "GET_SCREENINGDATA";
const GET_REPORTINGSCREENINGDATA = "GET_REPORTINGSCREENINGDATA";
const UPDATE_SCREENINGDATA = "UPDATE_SCREENINGDATA";
const POST_SCREENINGDATA = "POST_SCREENINGDATA";
const DELETE_SCREENINGDATA = "DELETE_SCREENINGDATA";
const POST_REGISTRATION = "POST_REGISTRATION";

// const CHANGE_WAIST = "CHANGE_WAIST";

export function getScreeningData() {
  return {
    type: GET_SCREENINGDATA,
    payload: axios.get("/api/screeningdata")
  };
}

export function postFromRegistration(
  gender,
  screeningDate,
  waistCircumference,
  triglycerides,
  cholesterol,
  bloodPressureSystolic,
  bloodPressureDiastolic,
  bloodSugar
) {
  return {
    type: POST_REGISTRATION,
    payload: axios.post("/api/screeningdata", {
      gender,
      screeningDate,
      waistCircumference,
      triglycerides,
      cholesterol,
      bloodPressureSystolic,
      bloodPressureDiastolic,
      bloodSugar
    })
  };
}

export function getReportingScreeningData() {
  return {
    type: GET_REPORTINGSCREENINGDATA,
    payload: axios.get("/api/screeningdata/report")
  };
}

// export function postScreeningData() {
//   return {
//     type: POST_SCREENINGDATA,
//     payload: axios.post("/api/screeningdata")
//   };
// }

export function updateScreeningData(
  waist,
  cholesterol,
  triglycerides,
  bloodPressureSystolic,
  bloodPressureDiastolic,
  bloodSugar,
  id
) {
  console.log(id);

  return {
    type: UPDATE_SCREENINGDATA,
    payload: axios.put(`/api/screeningdata/${id}`, {
      waist,
      cholesterol,
      triglycerides,
      bloodPressureDiastolic,
      bloodPressureSystolic,
      bloodSugar
    })
  };
}

export function deleteScreeningData(user_id, id) {
  console.log(user_id);
  return {
    type: DELETE_SCREENINGDATA,
    payload: axios.delete(`/api/screeningdata/${id}/${user_id}`)
  };
}

const initialState = {
  screeningData: [],
  currentScreeningData: []
};

export default function screeningDataReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_SCREENINGDATA}_FULFILLED`:
      return {
        ...state,
        screeningData: action.payload.data
      };
    case `${UPDATE_SCREENINGDATA}_FULFILLED`:
      return {
        ...state,
        screeningData: action.payload.data
      };
    case `${DELETE_SCREENINGDATA}_FULFILLED`:
      console.log(action.payload.data);
      return {
        ...state,
        screeningData: action.payload.data
      };
    case `${GET_REPORTINGSCREENINGDATA}_FULFILLED`:
      // console.log(action.payload);
      return {
        ...state,
        currentScreeningData: action.payload.data
      };
    // case `${POST_SCREENINGDATA}_FULFILLED`:
    // return {
    //   ...state,
    //   screeningData: action.payload.data
    //   };

    // case `${POST_REGRISTRATION}_FULFILLED`:
    // return {
    //   ...state,
    //   screeningData: action.payload.data

    // case CHANGE_WAIST:
    //   return {
    //     ...state,
    //     newWaist: action.payload
    //   };

    default:
      return state;
  }
}
