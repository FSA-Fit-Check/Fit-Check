import React from "react";
import UserPrefForm from "./userPreferences";
import GarmentGallery from "./garmentGallery";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the homepage content.</p>
      <GarmentGallery />
      <div className="containerOne">
        <p>Weather Content</p>
        <br />
        <button>Check the Weather!</button>
      </div>
      <UserPrefForm />
    </div>
  );
};

export default Home;
