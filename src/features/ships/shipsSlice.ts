/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { AppDispatch } from '../../store';
import type { StarshipType } from '../../types/Ship.interface';

export interface ShipsState {
  shipList: StarshipType[];
  ship: StarshipType | undefined;
  isLoading: boolean;
  isError: string;
}

const initialState: ShipsState = {
  shipList: [],
  ship: undefined,
  isLoading: false,
  isError: '',
};

const shipsSlice = createSlice({
  name: 'ships',
  initialState,
  reducers: {
    findShips(state, action: PayloadAction<StarshipType[]>) {
      state.isLoading = false;
      state.isError = '';
      state.shipList = action.payload;
    },
    findShip(state, action: PayloadAction<StarshipType>) {
      state.isLoading = false;
      state.isError = '';
      state.ship = action.payload;
    },
    notFound(state, action: PayloadAction<string>) {
      state.isError = action.payload;
      state.isLoading = false;
    },
    findingShips(state) {
      state.isLoading = true;
    },
  },
});

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

export const { findingShips, notFound } = shipsSlice.actions;
export default shipsSlice.reducer;
