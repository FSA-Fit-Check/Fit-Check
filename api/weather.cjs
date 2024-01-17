
const fetchWeatherData = async () => {
try {
    // Fetch weather data from National Weather Service API.
    let response = await fetch(`https://api.weather.gov/gridpoints/CAE/27,33/forecast`);//REPLACE ENDPOINT
    const data = await response.json();
    return data;
    } catch (error) {
        console.log("Error fetching weather data: " + error);
        throw error;
    }
};

module.exports = fetchWeatherData;