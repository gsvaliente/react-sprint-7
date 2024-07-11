/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';
import { createUser, loginUser } from './usersThunks';

export interface UsersState {
    isAuth: boolean;
    isLoading: boolean;
    error: string | null;
    userData: {
        email: string | null;
        uid: string | null;
    } | null;
    accessToken: string | null;
}

const initialState: UsersState = {
    isAuth: false,
    isLoading: false,
    error: '',
    userData: null,
    accessToken: null,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        logout: state => {
            state.isAuth = false;
            state.accessToken = null;
            state.userData = null;
            state.isLoading = false;
        },
    },
    extraReducers: builder =>
        builder
            .addCase(loginUser.pending, state => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuth = true;
                state.accessToken = action.payload.accessToken;
                state.userData = action.payload.userData;
            })
            .addCase(loginUser.rejected, state => {
                state.isLoading = false;
                state.isAuth = false;
                state.error = 'Email or Password are not correct';
            })
            .addCase(createUser.pending, state => {
                state.isLoading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuth = true;
                state.accessToken = action.payload.accessToken;
                state.userData = action.payload.userData;
            })
            .addCase(createUser.rejected, state => {
                state.isLoading = false;
                state.isAuth = false;
                state.error = 'something went wrong';
            }),
});

export default usersSlice.reducer;
export const { logout } = usersSlice.actions;
