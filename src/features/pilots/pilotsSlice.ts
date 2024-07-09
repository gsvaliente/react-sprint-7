/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getIdFromUrl } from '../../helpers/getIdFromUrl';

export interface PilotsState {
    pilotData: PilotType[] | [];
    isLoading: boolean;
    isError: string;
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
    id: string;
    image: string;
}

const initialState: PilotsState = {
    pilotData: [],
    isLoading: false,
    isError: '',
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
                state.pilotData = [
                    ...state.pilotData,
                    {
                        ...action.payload,
                        id: getIdFromUrl(action.payload.url),
                        image: `https://starwars-visualguide.com/assets/img/characters/${getIdFromUrl(
                            action.payload.url
                        )}.jpg`,
                    },
                ];
            })

            .addCase(findPilots.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message || '';
            });
    },
});

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

export const { findingPilots, notFound, clearPilots } = pilotsSlice.actions;
export default pilotsSlice.reducer;
