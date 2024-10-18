import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./reducers/counterReducer";

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
});

export const createReduxStore = () => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: {
      counter: { value: 1000 },
    },
  });
};
