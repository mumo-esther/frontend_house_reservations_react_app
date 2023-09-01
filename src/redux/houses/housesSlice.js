import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/v1/houses';

const initialState = {
  houses: [],
  isLoading: false,
  error: null,
};

export const fetchHouses = createAsyncThunk('houses/fetchHouses', async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
});

export const sendHouses = createAsyncThunk(
  'houses/sendHouses',
  async (formData) => {
    const response = await axios.post(baseUrl, formData);
    return response.data;
  },
);

export const deleteHouse = createAsyncThunk(
  'houses/deleteHouse',
  async (id) => {
    await axios.delete(`${baseUrl}/${id}`);
    return id;
  },
);

const housesSlice = createSlice({
  name: 'houses',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHouses.fulfilled, (state, action) => ({
        ...state,
        houses: action.payload,
        isLoading: false,
      }))
      .addCase(deleteHouse.fulfilled, (state, action) => ({
        ...state,
        houses: state.houses.filter((house) => house.id !== action.payload),
      }));
  },
});

export default housesSlice.reducer;
