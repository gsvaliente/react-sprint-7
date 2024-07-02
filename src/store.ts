import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import shipsReducer from "./features/ships/shipsSlice";

const store = configureStore({
  reducer: {
    ships: shipsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
