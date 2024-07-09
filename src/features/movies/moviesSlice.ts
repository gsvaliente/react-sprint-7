/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getIdFromUrl } from '../../helpers/getIdFromUrl';

export interface MoviesState {
    isLoading: boolean;
    isError: string;
    movieData: MovieType[] | [];
}

export interface MovieType {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: Date;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: Date;
    edited: Date;
    url: string;
    id: string;
    image: string;
}

const initialState: MoviesState = {
    isLoading: false,
    isError: '',
    movieData: [],
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        clearMovies(state) {
            state.movieData = [];
        },
    },
    extraReducers: builder => {
        builder
            .addCase(findMovies.pending, state => {
                state.isLoading = true;
                state.isError = '';
            })
            .addCase(findMovies.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = '';
                state.movieData = [
                    ...state.movieData,
                    {
                        ...action.payload,
                        id: getIdFromUrl(action.payload.url),
                        image: `https://starwars-visualguide.com/assets/img/films/${getIdFromUrl(
                            action.payload.url
                        )}.jpg`,
                    },
                ];
            });
    },
});

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

export const { clearMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
