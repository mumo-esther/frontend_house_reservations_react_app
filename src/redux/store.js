import { configureStore } from '@reduxjs/toolkit';
import housesReducer from './houses/housesSlice';
import reservationsListReducer from './reservations/reservationsListSlice';
import citiesSliceReducer from './reservations/citiesSlice';
import userReducer from './user/userSlice';
import reservationHousesReducer from './reservations/reservationHousesSlice';

const store = configureStore({
  reducer: {
    houses: housesReducer,
    user: userReducer,
    reservations: reservationsListReducer,
    cities: citiesSliceReducer,
    reservationHouses: reservationHousesReducer,
  },
});

export default store;
