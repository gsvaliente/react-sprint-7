import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import shipsReducer from './features/ships/shipsSlice';
import usersReducer from './features/users/usersSlice';

const store = configureStore({
    reducer: {
        ships: shipsReducer,
        users: usersReducer,
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
