import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendHouses } from '../redux/houses/housesSlice';

const HouseForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.houses.isLoading);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    icon: '',
    house_name: '',
    city: '',
    description: '',
    bedrooms: '',
    bathrooms: '',
    rent: '',
    security_deposit: '',
    contact_phone_number: '',
    admin_user_id: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendHouses({ house: formData }));
    navigate('/homepage');
  };

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <>
      <section className="add-house-page">
        {isLoading && <p>Loading...</p>}
        <h2>Create a House</h2>
        <form id="addHouse-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={formData.house_name}
            onChange={(e) => handleInputChange('house_name', e.target.value)}
            placeholder="House Name"
          />
          <input
            type="text"
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            placeholder="Description"
          />
          <input
            type="number"
            value={formData.bedrooms}
            onChange={(e) => handleInputChange('bedrooms', e.target.value)}
            placeholder="Number of Bedrooms"
          />
          <input
            type="number"
            value={formData.bathrooms}
            onChange={(e) => handleInputChange('bathrooms', e.target.value)}
            placeholder="Number of Bathrooms"
          />
          <input
            type="number"
            value={formData.rent}
            onChange={(e) => handleInputChange('rent', e.target.value)}
            placeholder="Monthly Rent"
          />
          <input
            type="number"
            value={formData.security_deposit}
            onChange={(e) => handleInputChange('security_deposit', e.target.value)}
            placeholder="Security Deposit"
          />
          <input
            type="text"
            value={formData.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
            placeholder="City"
          />
          <input
            type="text"
            value={formData.contact_phone_number}
            onChange={(e) => handleInputChange('contact_phone_number', e.target.value)}
            placeholder="Contact Phone Number"
          />
          <input
            type=" text"
            name="icon"
            value={formData.icon}
            onChange={(e) => handleInputChange('icon', e.target.value)}
            placeholder="Image URL"
          />
          <input
            type="number"
            name="admin_user_id"
            value={formData.admin_user_id}
            onChange={(e) => handleInputChange('admin_user_id', e.target.value)}
            placeholder="admin_user_id"
          />
          <div className="horixontal-buttons">
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default HouseForm;
