import { configureStore } from "@reduxjs/toolkit";
import shipsReducer from "./features/ships/shipsSlice";

const store = configureStore({
  reducer: {
    ships: shipsReducer,
  },
});

export default store;
