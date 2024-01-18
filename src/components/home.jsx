import React, { useState } from 'react';
import UserPrefForm from './userPreferences';
import GarmentGallery from './garmentGallery';

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);

  // Function to fetch weather data from the API
  const fetchWeatherData = async () => {
    try {
      let response = await fetch(`https://api.weather.gov/gridpoints/CAE/27,33/forecast`); // REPLACE ENDPOINT
      const data = await response.json();
      console.log('Weather API Response:', data); // Log the API response
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  };

  // Function to handle button click and fetch weather data
  const handleWeatherButtonClick = async () => {
    try {
      await fetchWeatherData(); // Fetch weather data on button click
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (

    <>
      <div>
        <h1>Welcome to the Home Page</h1>
        <p>This is the homepage content.</p>
        <div className='containerOne'>
          <p>Weather Content</p>
          {weatherData && (
            <div>
              <p>Temperature: {weatherData.properties.periods[0].temperature} °F</p>
              {/* Add more weather data as needed */}
            </div>
          )}
          <br/>
          <button onClick={handleWeatherButtonClick}>

    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the homepage content.</p>
      < GarmentGallery />
      <div className='containerOne'>
          <p>Weather Content</p><br/>
          <button>
            Check the Weather!
          </button>
        </div>
      < UserPrefForm />
    </div>
  );
};

export default Home;
