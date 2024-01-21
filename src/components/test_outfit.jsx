import React, { useState, useEffect } from 'react';

const OutfitViewer = () => {
  const [weather, setWeather] = useState(42); // Replace with actual value
  const [gender, setGender] = useState('male'); // Replace with actual value
  const [outfits, setOutfits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const req_params = new URLSearchParams();
        req_params.append('weather', weather);
        req_params.append('gender', gender);

        const response = await fetch('http://localhost:5173/outfit', {
            method: 'GET',
            Headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
              },
          });

        const data = await response.json();
        
        setOutfits(data.outfits);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching outfits:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [weather, gender]);

  return (
    <div>
      <h1>Outfit Viewer</h1>
      {loading ? (
        <p>Loading outfits...</p>
      ) : (
        <div>
          <h2>Response from Backend</h2>
          <p>{ JSON.stringify(outfits) 
          }</p>
        </div>
      )}
    </div>
  );
};

export default OutfitViewer;
