import React from "react";
import GarmentUploadForm from './garmentUpload';

const Profile = () => {

  return (
    <div
    className='flex flex-col gap-3 text-whitecream'> 
      {/* display username here */}
      <h1>Hello, User! </h1>
      <GarmentUploadForm />
    </div>
  )
}

export default Profile;