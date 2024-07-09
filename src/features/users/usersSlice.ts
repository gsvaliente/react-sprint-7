/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as auth from 'firebase/auth';
import { authFirebase } from '../../firebase/firebase';

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
    //TODO change back to false
    isAuth: true,
    isLoading: false,
    error: '',
    userData: null,
    accessToken: null,
};

export const loginUser: any = createAsyncThunk(
    'users/login',
    async (
        { email, password }: { email: string; password: string },
        { rejectWithValue }
    ) => {
        try {
            const authGenerate = await auth.signInWithEmailAndPassword(
                authFirebase,
                email,
                password
            );

            const { email: userEmail, uid } = await authGenerate.user;
            const { token: accessToken, expirationTime } =
                await authGenerate.user.getIdTokenResult();

            return {
                accessToken,
                expirationTime,
                userData: { userEmail, uid },
            };
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const createUser: any = createAsyncThunk(
    'users/createUser',
    async (
        { email, password }: { email: string; password: string },
        { rejectWithValue }
    ) => {
        try {
            const authGenerate = await auth.createUserWithEmailAndPassword(
                authFirebase,
                email,
                password
            );

            const { email: userEmail, uid } = await authGenerate.user;
            const { token: accessToken, expirationTime } =
                await authGenerate.user.getIdTokenResult();

            return {
                accessToken,
                expirationTime,
                userData: { userEmail, uid },
            };
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        login: state => {
            state.isAuth = true;
        },
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
                state.error = 'something went wrong';
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
export const { login, logout } = usersSlice.actions;
