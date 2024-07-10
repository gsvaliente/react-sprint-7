/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { AppDispatch } from '../../store';
import type { StarshipType } from '../../types/Ship.interface';
import { findShip, findShipImage, findShips } from './shipsThunks';

export interface ShipsState {
    shipList: StarshipType[];
    ship: StarshipType | undefined;
    isLoading: boolean;
    isError: string;
    image: string;
    page: number;
    films: string[] | null;
    pilots: string[] | null;
}

const initialState: ShipsState = {
    shipList: [],
    ship: undefined,
    isLoading: false,
    isError: '',
    image: '',
    page: 1,
    films: null,
    pilots: null,
};

const shipsSlice = createSlice({
    name: 'ships',
    initialState,
    reducers: {
        clearShip(state) {
            // state.isLoading = false;
            state.isError = '';
            state.ship = undefined;
            state.films = null;
            state.pilots = null;
            state.image = '';
            // state.shipList = [];
        },
        nextPage(state) {
            state.page++;
        },
        loadMore(state, action: PayloadAction<StarshipType[]>) {
            state.shipList = state.shipList.concat(action.payload);
            state.isLoading = false;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(findShips.pending, state => {
                state.isLoading = true;
                state.isError = '';
            })
            .addCase(findShips.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = '';
                state.shipList = [...state.shipList.concat(action.payload)];
            })
            .addCase(findShips.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message || '';
            })
            .addCase(findShip.pending, state => {
                state.isLoading = true;
                state.isError = '';
            })
            .addCase(findShip.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = '';
                state.ship = action.payload;
                state.films = action.payload.films;
                state.pilots = action.payload.pilots;
            })
            .addCase(findShip.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message || '';
            })
            .addCase(findShipImage.pending, state => {
                state.isLoading = true;
                state.isError = '';
            })
            .addCase(findShipImage.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = '';
                state.image = action.payload;
            })
            .addCase(findShipImage.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message || '';
            });
    },
});

export function loadMore(url: string) {
    if (!url) return { type: 'ships/notFound', payload: 'No URL provided' };

    return async function (dispatch: AppDispatch) {
        try {
            dispatch({ type: 'ships/findingShips' });
            dispatch({ type: 'ships/nextPage' });

            const res = await fetch(url);
            const data = await res.json();
            dispatch({ type: 'ships/loadMore', payload: data.results });
        } catch (error: any) {
            dispatch({ type: 'ships/notFound', payload: error.message });
        }
    };
}

export const { nextPage, clearShip } = shipsSlice.actions;
export default shipsSlice.reducer;
