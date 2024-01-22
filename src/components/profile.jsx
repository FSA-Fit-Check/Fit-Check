import React from "react";
import { Link } from "react-router-dom";
import GarmentUploadForm from './garmentUpload';

const Profile = () => {

  return (
    <div
        className='flex flex-col gap-3 text-whitecream'> 
      {/* display username here based on login token and username field*/}
      <h1>Hello, User! </h1>
      <Link to="/garmentUpload">Upload Garments for Your Wardrobe Here!</Link>    
    </div>
  )
}

export default Profile;