import React from 'react';
import { combineReducers } from 'redux';
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";
import taskReducer from "./taskReducer";
import authReducer from "./authReducer";
import imgReducer from "./imgReduser";

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    task: taskReducer,
    auth: authReducer,
    img: imgReducer
});

export default rootReducer;