/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { AppDispatch } from '../../store';
import type { StarshipType } from '../../types/Ship.interface';

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
        findShips(state, action: PayloadAction<StarshipType[]>) {
            state.isLoading = false;
            state.isError = '';
            state.shipList = [...action.payload];
        },
        clearShip(state) {
            state.isLoading = false;
            state.isError = '';
            state.ship = undefined;
            state.films = null;
            state.pilots = null;
        },
        findShip(state, action: PayloadAction<StarshipType>) {
            state.isLoading = false;
            state.isError = '';
            state.ship = action.payload;
            state.films = action.payload.films;
            state.pilots = action.payload.pilots;
        },
        findShipImage(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.isError = '';
            state.image = action.payload;
        },
        notFound(state, action: PayloadAction<string>) {
            state.isError = action.payload;
            state.isLoading = false;
        },
        findingShips(state) {
            state.isLoading = true;
            state.image = '';
        },
        nextPage(state) {
            state.page++;
        },
        prevPage(state) {
            if (state.page > 1) state.page--;
            return;
        },
        loadMore(state, action: PayloadAction<StarshipType[]>) {
            state.shipList = [...state.shipList, ...action.payload];
            state.isLoading = false;
        },
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

export function findShips(url: string) {
    if (!url)
        return {
            type: 'ships/notFound',
            payload: 'No Url Provided',
        };

    return async function (dispatch: AppDispatch) {
        try {
            dispatch({ type: 'ships/findingShips' });

            const res = await fetch(url);
            const data = await res.json();

            dispatch({ type: 'ships/findShips', payload: data.results });
        } catch (error: any) {
            dispatch({ type: 'ships/notFound', payload: error.message });
        }
    };
}

export function findShip(url: string) {
    if (!url)
        return {
            type: 'ships/notFound',
            payload: 'No Url Provided',
        };

    return async function (dispatch: AppDispatch) {
        try {
            dispatch({ type: 'ships/findingShips' });
            const res = await fetch(url);
            const data = await res.json();

            dispatch({ type: 'ships/findShip', payload: data });
        } catch (error: any) {
            dispatch({ type: 'ships/notFound', payload: error.message });
        }
    };
}

export function findShipImage(url: string) {
    if (!url)
        return {
            type: 'ships/notFound',
            payload: 'No Url Provided',
        };

    return async function (dispatch: AppDispatch) {
        try {
            dispatch({ type: 'ships/findingShips' });
            const res = await fetch(url);

            res.ok
                ? dispatch({ type: 'ships/findShipImage', payload: res.url })
                : dispatch({
                      type: 'ships/findShipImage',
                      payload:
                          'https://starwars-visualguide.com/assets/img/big-placeholder.jpg',
                  });
        } catch (error: any) {
            dispatch({ type: 'ships/notFound', payload: error.message });
        }
    };
}

export const { findingShips, notFound, nextPage, prevPage, clearShip } =
    shipsSlice.actions;
export default shipsSlice.reducer;
