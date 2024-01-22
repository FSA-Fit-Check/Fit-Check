import React from 'react';
import './App.css';
import './output.css';
import Home from './components/home.jsx';
import Registration from './components/registration.jsx';
import Login from './components/login.jsx';
import Navbar from './components/navbar.jsx';
import {Router, Routes, Route} from 'react-router-dom'
import Profile from './components/profile.jsx';
import GarmentUploadForm from './components/garmentUpload.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/garmentUpload" element={<GarmentUploadForm />} />
      </Routes>
      <br />
    </>
  );
}

export default App;

