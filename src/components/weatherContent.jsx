import React, { useEffect, useState } from 'react';
import '../output.css';

const WeatherContent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("default");

  const fetchWeatherData = async (location) => {
    try {
      let response = await fetch(`https://api.weather.gov/gridpoints/${location}/forecast`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  };

  const handleWeatherButtonClick = async () => {
    try {
      if (selectedLocation !== "default") {
        await fetchWeatherData(selectedLocation);
      } else {
        console.warn('Please select a location.');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    // Remove automatic fetch on page load
  }, []);

  return (
    <div className='containerOne panel'>
      <div className='flex flex-row justify-center items-center gap-2 fullwidth'>
        <img src="/weather_icon.svg" className='icon' alt="Weather Icon"></img>
        <p className='text-xl font-serif italic'>Weather Content</p>
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="rounded-md"
        >
          <option value="default" disabled>Select Location</option>
          <option value="CAE/27,33">Location 1</option>
          <option value="XXX/YY,ZZ">Location 2</option>
          <option value="ABC/12,34">Location 3</option>
        </select>
      </div>

      {weatherData && (
        <div>
          <p>Temperature: <strong>{weatherData.properties.periods[0].temperature} °F</strong></p>
          {/* Add more weather data as needed */}
        </div>
      )}

      <button onClick={handleWeatherButtonClick} className="rounded-md">
        Refresh weather
      </button>
    </div>
  );
}

export default WeatherContent;
