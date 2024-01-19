import React, { useState } from 'react';
import UserPrefForm from './userPreferences';
import GarmentGallery from './garmentGallery';
import WeatherContent from './weatherContent';

const Home = () => {
  return (
    <div 
    className='flex flex-col gap-3'>
      <h1 className='text-whitecream'>Fit Check</h1>
      < GarmentGallery />
      < WeatherContent />
      < UserPrefForm />
    </div>
  );
};

export default Home;
