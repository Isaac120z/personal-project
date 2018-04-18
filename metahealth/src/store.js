import {createStore, applyMiddleware, combineReducers} from "redux";
import promiseMiddleware  from "redux-promise-middleware";

import userReducer from "./ducks/userReducer";
import screeningdataReducer from "./ducks/screeningdataReducer";

const store = createStore(
    combineReducers({
        userReducer,
        screeningdataReducer

    }),
    applyMiddleware(promiseMiddleware())
);

export default store;