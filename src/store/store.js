import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { todos } from "./reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const reducers = {
  todos,
};
const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};
const reducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({ reducer: persistedReducer });

export default store;
