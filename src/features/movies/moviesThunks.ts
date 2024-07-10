/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { MovieType } from './moviesSlice';

export const findMovies = createAsyncThunk<MovieType, string, any>(
    'movies/findMovies',
    async (url: string, { rejectWithValue }) => {
        try {
            const res = await fetch(url);
            const data = await res.json();

            return data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || 'failed to fetch movie details'
            );
        }
    }
);
