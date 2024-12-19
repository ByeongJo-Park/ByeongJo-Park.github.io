import { combineReducers } from "@reduxjs/toolkit";
import viewReducer from "./viewReducer";
import projectReducer from "./projectReducer";

const rootReducer = combineReducers({ view: viewReducer, project: projectReducer });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;