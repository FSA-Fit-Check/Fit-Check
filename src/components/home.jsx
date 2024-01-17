import React, { useState } from 'react';
import UserPrefForm from './userPreferences.jsx';
import fetchWeatherData from '/Users/dhoffman/Desktop/FSACourseWork/unit_5/Fit-Check/api/weather.cjs';

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleWeatherButtonClick = async () => {
    try {
      const data = await fetchWeatherData();
      console.log('Weather API Response:', data); // Log the successful response
      setWeatherData(data);
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
          <p>Weather Content</p><br/>
          <button onClick={handleWeatherButtonClick}>
            Check the Weather!
          </button>
        </div>
        <UserPrefForm />
      </div>
    </>
  );
};

export default Home;

