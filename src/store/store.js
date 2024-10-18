import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./reducers/counterReducer";

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
});

export const createReduxStore = (initialState = {}) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: {
      counter: initialState,
    },
  });
};
