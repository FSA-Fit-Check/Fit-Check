import React from 'react';
import UserPrefForm from './userPreferences';

const Home = () => {
  return (
    <>
      <div>
        <h1>Welcome to the Home Page</h1>
        <p>This is the homepage content.</p>
        <div className='containerOne'>
          <p>Weather Content</p><br/>
          <button>
            Check the Weather!
          </button>
        </div>
        <UserPrefForm />
      </div>
    </>

    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the homepage content.</p>
      < UserPrefForm />
    </div>

  );
};

export default Home;
