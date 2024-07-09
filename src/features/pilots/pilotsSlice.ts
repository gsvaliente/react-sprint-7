/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PilotsState {
    pilotData: PilotType[] | [];
    isLoading: boolean;
    isError: string;
    image: string;
}

export interface PilotType {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: Date;
    edited: Date;
    url: string;
}

const initialState: PilotsState = {
    pilotData: [],
    isLoading: false,
    isError: '',
    image: '',
};

const pilotsSlice = createSlice({
    name: 'pilots',
    initialState,
    reducers: {
        findingPilots(state) {
            state.isLoading = true;
        },
        notFound(state, action: PayloadAction<string>) {
            state.isError = action.payload;
            state.isLoading = false;
        },
        clearPilots(state) {
            state.pilotData = [];
        },
    },
    extraReducers: builder => {
        builder
            .addCase(findPilots.pending, state => {
                state.isLoading = true;
                state.isError = '';
            })
            .addCase(findPilots.fulfilled, (state, action) => {
                state.isLoading = false;
                state.pilotData = [...state.pilotData, action.payload];
            })
            .addCase(findPilots.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message || '';
            });
    },
});

export const findPilots = createAsyncThunk(
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

export const { findingPilots, notFound, clearPilots } = pilotsSlice.actions;
export default pilotsSlice.reducer;
