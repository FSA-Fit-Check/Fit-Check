import React, { useState } from 'react';
import './App.css';
import './output.css';
import Home from './components/home.jsx';
import Registration from './components/registration.jsx';
import Login from './components/login.jsx';
import Navbar from './components/navbar.jsx';
import {Router, Routes, Route, useNavigate} from 'react-router-dom'
import Profile from './components/profile.jsx';
import GarmentUploadForm from './components/garmentUpload.jsx';


function App() {
  const [userId, setUserId] = useState(null);

  const navigate = useNavigate();
  // set userId
  const handleSetUserId = (newUserId) => {
    setUserId(newUserId);
    // go to profile page after setting userId
    navigate('/profile');
  };
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home userId={userId}/>} />
        <Route path="/login" element={<Login setUserId={handleSetUserId}/>} />
        <Route path="/registration" element={<Registration setUserId={handleSetUserId}/>} />
        <Route path="/profile" element={<Profile userId={userId}/>} />
        <Route path="/garmentUpload" element={<GarmentUploadForm />} />
      </Routes>
      <br />
    </>
  );
}

export default App;

