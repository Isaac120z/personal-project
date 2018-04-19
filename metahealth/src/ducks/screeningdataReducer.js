import axios from "axios";

const GET_SCREENINGDATA = "GET_SCREENINGDATA";
const GET_REPORTINGSCREENINGDATA = "GET_REPORTINGSCREENINGDATA";
const UPDATE_SCREENINGDATA = "UPDATE_SCREENINGDATA";
const POST_SCREENINGDATA = "POST_SCREENINGDATA";
const DELETE_SCREENINGDATA = "DELETE_SCREENINGDATA";
const POST_REGISTRATION = "POST_REGISTRATION";

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

// export function updateScreeningData() {
//   return {
//     type: UPDATE_SCREENINGDATA,
//     payload: axios.put(`/api/screeningdata/${id}`)
//   };
// }

// export function deleteScreeningData() {
//   return {
//     type: DELETE_SCREENINGDATA,
//     payload: axios.delete(`/api/screeningdata/${id}`)
//   };
// }

const initialState = {
  screeningData: []
};

export default function screeningDataReducer(state = initialState, action) {
  console.log(action.type);
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
      return {
        ...state,
        screeningData: action.payload.data
      };
    case `${GET_REPORTINGSCREENINGDATA}_FULFILLED`:
      console.log(action.payload);
      return {
        ...state,
        screeningData: action.payload.data
        // case `${POST_SCREENINGDATA}_FULFILLED`:
        // return {
        //   ...state,
        //   screeningData: action.payload.data
        //   };

        // case `${POST_REGRISTRATION}_FULFILLED`:
        // return {
        //   ...state,
        //   screeningData: action.payload.data
      };

    default:
      return state;
  }
}
