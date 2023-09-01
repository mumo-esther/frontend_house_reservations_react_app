import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/v1/houses';

const initialState = {
  reservationHouses: [],
  isLoading: false,
  error: null,
};

export const fetchHouseForReservation = createAsyncThunk('houses/fetchHouseForReservation', async () => {
  const response = await axios.get(`${baseUrl}/unique_houses`);
  return response.data;
});

const reservationHousesSlice = createSlice({
  name: 'reservationHouses',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHouseForReservation.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchHouseForReservation.fulfilled, (state, action) => ({
        ...state,
        reservationHouses: action.payload,
        isLoading: false,
      }))
      .addCase(fetchHouseForReservation.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
      }));
  },
});

export default reservationHousesSlice.reducer;
