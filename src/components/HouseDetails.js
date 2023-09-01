import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { fetchHouses } from '../redux/houses/housesSlice';
import '../styling/HouseDetails.css';

const HouseDetails = () => {
  const { id } = useParams();
  const houseId = parseInt(id, 10);
  const dispatch = useDispatch();
  const { houses, isLoading, error } = useSelector((state) => state.houses);

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  const selectedHouse = houses.find((house) => house.id === houseId);
  HouseDetails.propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {error && <p>{error}</p>}
      {selectedHouse ? (
        <div className="HouseDetails-container">
          <img className="icon" src={selectedHouse.icon} alt="House Icon" />
          <div className="lower-part">
            <h2 className="detailTitle">
              {' '}
              {selectedHouse.house_name}
            </h2>
            <div className="info">
              <p>{selectedHouse.city || 'N/A'}</p>
            </div>
            <div className="info">
              <p>{selectedHouse.description}</p>
            </div>
            <div className="info">
              <p>
                <strong>Bedrooms:</strong>
                {' '}
                {selectedHouse.bedrooms}
              </p>
            </div>
            <div className="info">
              <p>
                <strong>Bathrooms</strong>
                {' '}
                {selectedHouse.bathrooms}
              </p>
            </div>
            <div className="info">
              <p>
                <strong>Rent:</strong>
                {' '}
                {selectedHouse.rent}
              </p>
            </div>
            <div className="info">
              <p>
                <strong>Security Deposit: </strong>
                {selectedHouse.security_deposit}
              </p>
            </div>
            <div className="info">
              <p>
                <strong>Contact Phone Number: </strong>
                {selectedHouse.contact_phone_number || 'N/A'}
              </p>
              <button className="reserve-btn" type="submit">
                <Link className="navlink" to="/reservation-form">
                  Make Reservation
                </Link>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>No details available for this house.</p>
      )}
    </div>
  );
};

export default HouseDetails;
