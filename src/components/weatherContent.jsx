import { React, useState } from 'react';
import '../output.css'

const WeatherContent = () => {
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
    <div className='containerOne
      text-whitecream
    bg-black rounded-xl p-3 drop-shadow-lg border-2 border-whitecream
      flex flex-col gap-3
    '>
      
      <div className='flex flex-row
      justify-center items-center gap-2
      '>
        <img src="/weather_icon.svg"
        className='icon'></img>
        <p className='text-xl font-serif italic'>Weather Content</p>
      </div>
      

      {weatherData && (
        <div>
          <p>Temperature: <strong>{weatherData.properties.periods[0].temperature} °F</strong></p>
          {/* Add more weather data as needed */}
        </div>
      )}

      <button
      onClick={handleWeatherButtonClick}
      className="rounded-md"
      >Get weather</button>

    </div>
  );
}

export default WeatherContent;