// src/components/UserPreferencesForm.jsx
import React, { useState } from 'react';

const UserPreferencesForm = ({ onGenerateOutfit }) => {
  const [gender, setGender] = useState('');
  const [seasonPreference, setSeasonPreference] = useState('');
  const [placeForVisit, setPlaceForVisit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Pass user preferences to the parent component for further processing
    onGenerateOutfit({ gender, seasonPreference, placeForVisit });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Gender:
        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
      </label>
      <br />
      <label>
        Season Preference:
        <input type="text" value={seasonPreference} onChange={(e) => setSeasonPreference(e.target.value)} />
      </label>
      <br />
      <label>
        Place for Visit:
        <input type="text" value={placeForVisit} onChange={(e) => setPlaceForVisit(e.target.value)} />
      </label>
      <br />
      <button type="submit">Generate Outfit</button>
    </form>
  );
};

export default UserPreferencesForm;
