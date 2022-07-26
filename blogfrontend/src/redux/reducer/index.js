import { combineReducers } from "redux";
import { apiReducer } from "./reducer";
import React from 'react'

const rootReducer =combineReducers({apiReducer})

export {rootReducer}
