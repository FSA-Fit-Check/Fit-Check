import React, { useState } from 'react';
// Import other necessary modules/components

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      let response = await fetch(`https://api.weather.gov/gridpoints/CAE/27,33/forecast`);
      const data = await response.json();
      console.log('Weather API Response:', data);
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      // Display an error message to the user if needed
    }
  };

  const handleWeatherButtonClick = async () => {
    try {
      await fetchWeatherData();
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <>
      <div>
        <h1>Welcome to the Home Page</h1>
        <p>This is the homepage content.</p>
      </div>
      <div className='containerOne'>
        <p>Weather Content</p>
        {weatherData && (
          <div>
            <p>Short Forcast: {weatherData.properties.periods[0].shortForecast}</p>
            <p>Temperature: {weatherData.properties.periods[0].temperature} °F</p>
            {/* Add more weather data as needed */}
          </div>
        )}
        <br />
        <button onClick={handleWeatherButtonClick}>Fetch Weather Data</button>
      </div>
    </>
  );
};

export default Home;
