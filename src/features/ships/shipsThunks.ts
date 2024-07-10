/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { StarshipType } from '../../types/Ship.interface';

export const findShips = createAsyncThunk<StarshipType[], string, any>(
    'ships/findShips',
    async (url: string, { rejectWithValue }) => {
        try {
            const res = await fetch(url);
            const data = await res.json();

            return data.results;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || 'Failed to fetch ships'
            );
        }
    }
);

export const findShip = createAsyncThunk<StarshipType, string, any>(
    'ships/findShip',
    async (url: string, { rejectWithValue }) => {
        try {
            const res = await fetch(url);
            const data = await res.json();

            return data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || 'Failed to fetch ships'
            );
        }
    }
);

export const findShipImage = createAsyncThunk<string, string, any>(
    'ships/findShipImage',
    async (url: string, { rejectWithValue }) => {
        try {
            let img = '';
            const res = await fetch(url);
            res.ok
                ? (img = res.url)
                : (img =
                      'https://starwars-visualguide.com/assets/img/big-placeholder.jpg');
            return img;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || 'Failed to fetch ships'
            );
        }
    }
);
