import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SplashPage from './components/SplashPage';
import HomePage from './components/HomePage';
import LoginForm from './components/sessions/LoginForm';
import RegistrationForm from './components/sessions/RegistrationForm';
import HouseForm from './components/addHouse';
import ReservationsList from './components/ReservationsList';
import ReservationForm from './components/ReservationForm';
import { fetchHouses } from './redux/houses/housesSlice';
import NavBar from './components/NavBar';
import HouseDetails from './components/HouseDetails';
import DeleteHouse from './components/DeleteHouse';

const App = () => {
  const dispatch = useDispatch();
  const [shouldShowNavBar, setShouldShowNavBar] = useState(true);

  // Fetch houses on component mount
  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  useEffect(() => {
    // Determine if NavBar should be shown based on the route
    const currentPath = window.location.pathname;
    setShouldShowNavBar(currentPath !== '/' && currentPath !== '/login');
  }, []);

  return (
    <Router>
      <div className="main">
        <div className="navbar-container">
          {/* Conditionally render the NavBar */}
          {shouldShowNavBar && (
            <div className="left-nav">
              <NavBar />
            </div>
          )}

          <div className="content">
            <Routes>
              <Route path="/" element={<SplashPage />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegistrationForm />} />
              <Route path="/homepage" element={<HomePage />} />
              <Route path="/add-house" element={<HouseForm />} />
              <Route path="/House/:id" element={<HouseDetails />} />
              <Route path="/delete-house" element={<DeleteHouse />} />
              <Route
                exact
                path="/reservations"
                element={<ReservationsList />}
              />
              <Route
                exact
                path="/reservation-form"
                element={<ReservationForm />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
