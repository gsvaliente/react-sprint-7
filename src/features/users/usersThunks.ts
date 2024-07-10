/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as auth from 'firebase/auth';
import { authFirebase } from '../../firebase/firebase';

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
