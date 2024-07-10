/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';
import { getIdFromUrl } from '../../helpers/getIdFromUrl';
import { findPilots } from './pilotsThunks';

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

export const { clearPilots } = pilotsSlice.actions;
export default pilotsSlice.reducer;
