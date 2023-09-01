/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setReservations } from '../redux/reservations/reservationsListSlice';

const ReservationsList = () => {
  const dispatch = useDispatch();
  const { reserved, isLoading, error } = useSelector(
    (state) => state.reservations,
  );

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('reserved'));
    if (data) dispatch(setReservations(data));
  }, [dispatch]);

  return (
    <div className="reservations-list-page">
      <h2>Your Resevations</h2>
      {isLoading && <h2>Loading...</h2>}
      {error && <p>{error}</p>}
      <div className="main-container">
        {reserved && reserved.map((reservation, index) => (
          <div className="container" key={index}>
            <h4>
              Reservation Date:
              {reservation.date}
            </h4>
            <p>
              Reserved House:
              {reservation.selectedHouse}
            </p>
            <p>
              City:
              {reservation.selectedCity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReservationsList;
