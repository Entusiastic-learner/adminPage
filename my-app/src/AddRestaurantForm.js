import React, { useState } from 'react';

const AddRestaurantForm = ({ addRestaurant }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRestaurant = {
      id: Date.now(),
      name,
      location
    };
    addRestaurant(newRestaurant);
    setName('');
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f2f2f2', borderRadius: '5px' }}>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        style={{ padding: '10px', margin: '5px', width: '200px', borderRadius: '3px', border: '1px solid #ccc' }}
        required 
      />
      <input 
        type="text" 
        placeholder="Location" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
        style={{ padding: '10px', margin: '5px', width: '200px', borderRadius: '3px', border: '1px solid #ccc' }}
        required 
      />
      <button 
        type="submit" 
        style={{ padding: '10px 20px', margin: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
      >
        Add Restaurant
      </button>
    </form>
  );
};

export default AddRestaurantForm;

