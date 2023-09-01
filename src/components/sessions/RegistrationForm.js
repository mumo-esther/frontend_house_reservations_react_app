import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationFailure, setRegistrationFailure] = useState(false);
  const [errorData, setErrorData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const url = 'http://127.0.0.1:3000/api/v1/users';
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: formData }),
      });

      if (response.ok) {
        setRegistrationSuccess(true);
      } else {
        const data = await response.json();
        setErrorData(data.errors);
        setRegistrationFailure(true);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className="registration">
      <h2>Register</h2>
      {registrationSuccess ? (
        <div>
          <p>
            Registration successful! You can now
            {' '}
            <Link to="/login">log in</Link>
            .
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
          {registrationFailure && errorData && errorData.name && (
            <p>
              Name
              {errorData.name[0]}
            </p>
          )}
          <br />
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email"
          />
          {registrationFailure && errorData && errorData.email && (
            <p>
              Email
              {errorData.email[0]}
            </p>
          )}
          <br />
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />

          {registrationFailure && errorData && errorData.password && (
            <p>
              Password
              {errorData.password[0]}
            </p>
          )}
          <br />
          <input
            id="confirm_password"
            type="password"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
            placeholder="Confirm Password"
          />
          {registrationFailure && errorData && errorData.password_confirmation && (
            <p>
              Password
              {errorData.password_confirmation[0]}
            </p>
          )}
          <br />
          <div className="horizontal-buttons">
            <button type="submit">Register</button>
            <Link to="/login" className="button">Login</Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;
