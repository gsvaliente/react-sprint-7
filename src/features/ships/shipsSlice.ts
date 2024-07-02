import { createSlice } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { StarshipType } from '../../types/Ship.interface';

export interface ShipsState {
  shipList: StarshipType[];
  isLoading: boolean;
  isError: string;
}

const initialState: ShipsState = {
  shipList: [],
  isLoading: false,
  isError: '',
};

const shipsSlice = createSlice({
  name: 'ships',
  initialState,
  reducers: {
    findShips(state, action) {
      state.isLoading = false;
      state.isError = '';
      state.shipList = action.payload;
    },
    notFound(state) {
      state.isError = 'Error finding ships';
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
    };

  return async function (dispatch: Dispatch) {
    dispatch({ type: 'ships/findingShips' });

    const res = await fetch(url);
    const data = await res.json();

    dispatch({ type: 'ships/findShips', payload: data.results });
  };
}

export const { findingShips, notFound } = shipsSlice.actions;
export default shipsSlice.reducer;
