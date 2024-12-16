import { combineReducers } from "@reduxjs/toolkit";
import viewReducer from "./viewReducer";

const rootReducer = combineReducers({ view: viewReducer });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;