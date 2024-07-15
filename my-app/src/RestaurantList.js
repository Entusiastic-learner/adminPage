
import React, { useState } from 'react';

const RestaurantList = ({ restaurants, deleteRestaurant, updateRestaurant }) => {
  const [updatedName, setUpdatedName] = useState('');
  const [updatedLocation, setUpdatedLocation] = useState('');
  const [showUpdateInputs, setShowUpdateInputs] = useState({}); // State to track which restaurant's inputs are visible

  const toggleUpdateInputs = (id) => {
    setShowUpdateInputs(prevState => ({
      ...prevState,
      [id]: !prevState[id] // Toggle visibility for the specific restaurant id
    }));
  };

  const handleUpdate = (id) => {
    const updatedRestaurant = {
      name: updatedName !== '' ? updatedName : restaurants.find(r => r.id === id).name,
      location: updatedLocation !== '' ? updatedLocation : restaurants.find(r => r.id === id).location
    };
    updateRestaurant(id, updatedRestaurant);
    setUpdatedName('');
    setUpdatedLocation('');
    toggleUpdateInputs(id); // Hide input fields after update
  };

  return (
    <div>
      {restaurants.map(restaurant => (
        <div key={restaurant.id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
          <h3>{restaurant.name}</h3>
          <p>Location: {restaurant.location}</p>
          <button 
            style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer', marginRight: '5px' }}
            onClick={() => deleteRestaurant(restaurant.id)}
          >
            Delete
          </button>
          {!showUpdateInputs[restaurant.id] ? (
            <button 
              style={{ backgroundColor: '#2196F3', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer' }}
              onClick={() => toggleUpdateInputs(restaurant.id)}
            >
              Update
            </button>
          ) : (
            <div>
              <input
                type="text"
                placeholder="New name"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
              />
              <input
                type="text"
                placeholder="New location"
                value={updatedLocation}
                onChange={(e) => setUpdatedLocation(e.target.value)}
              />
              <button
                style={{ backgroundColor: '#2196F3', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer', marginTop: '5px' }}
                onClick={() => handleUpdate(restaurant.id)}
              >
                Save
              </button>
              <button
                style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer', marginTop: '5px', marginLeft: '5px' }}
                onClick={() => toggleUpdateInputs(restaurant.id)}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;



