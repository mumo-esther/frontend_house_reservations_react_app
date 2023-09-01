import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/v1/houses';

const initialState = {
  cities: [],
  isLoading: false,
  error: null,
};

export const fetchCities = createAsyncThunk('cities/fetchCities', async () => {
  const response = await axios.get(`${baseUrl}/unique_cities`);
  return response.data;
});

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCities.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchCities.fulfilled, (state, action) => ({
        ...state,
        cities: action.payload,
        isLoading: false,
      }))
      .addCase(fetchCities.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
      }));
  },
});

export default citiesSlice.reducer;
