/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { PilotType } from './pilotsSlice';

//* HAVE TO REFRESH ON WHY THIS TYPE WORKS
export const findPilots = createAsyncThunk<PilotType, string, any>(
    'pilots/findPilots',
    async (url: string, { rejectWithValue }) => {
        try {
            const res = await fetch(url);
            const data = await res.json();

            return data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || 'failed to fetch pilot details'
            );
        }
    }
);
