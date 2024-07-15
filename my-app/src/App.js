
import React, { useState } from 'react';
import AddRestaurantForm from './AddRestaurantForm';
import RestaurantList from './RestaurantList';

const App = () => {
  const [restaurants, setRestaurants] = useState([]);

  // Function to add a new restaurant
  const addRestaurant = (newRestaurant) => {


    setRestaurants([...restaurants, newRestaurant]);
  };

  // Function to delete a restaurant by id
  const deleteRestaurant = (id) => {
    setRestaurants(restaurants.filter(restaurant => restaurant.id !== id));
  };

  // Function to update restaurant details
  const updateRestaurant = (id, updatedRestaurant) => {
    const updatedRestaurants = restaurants.map(restaurant =>
      restaurant.id === id ? { ...restaurant, ...updatedRestaurant } : restaurant
    );
    setRestaurants(updatedRestaurants);
  };

  return (
    <div className="App" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px',background:'grey' }}>
      <h1>Restaurant Admin Page</h1>
      <AddRestaurantForm addRestaurant={addRestaurant} />
      <RestaurantList 
        restaurants={restaurants} 
        deleteRestaurant={deleteRestaurant} 
        updateRestaurant={updateRestaurant} 
      />
    </div>
  );
};

export default App;


