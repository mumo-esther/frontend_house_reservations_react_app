import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setuserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setuserData } = userSlice.actions;

export default userSlice.reducer;
