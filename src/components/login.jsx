// login.jsx

import React, { useState } from 'react';
import '../output.css';

const Login = ({ setUserId }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        if (data.token && data.userId && data.username ) {
          setResponseMessage(`Login successful!`);
          // document.cookie = `token=${data.token}; path=/; secure; samesite=strict`;
          window.localStorage.setItem('TOKEN', data.token);
          setUserId(data.userId);
          setUsername(data.username);
          console.log(data.username);
        } else {
          setResponseMessage(`Token not received..`);
        }
      } else if (data.message === 'Invalid credentials') {
        setResponseMessage(`Login failed. Invalid credentials.`);
      } else {
        setResponseMessage(`Login failed due to an unknown error.`);
      }
    } catch (error) {
      setResponseMessage(`Error during login: ${error}`);
      console.error('Error during login:', error);
    }
  };

  return (
    <div className='panel'>
      <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
        <h1 className='text-xl text-whitecream font-serif italic'>User Log-in Form</h1>
        <label className='flex flex-row justify-center gap-3 text-gray'>
          Username:
          <input
            type="text"
            name="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='rounded-md bg-verydarkgray text-whitecream'
          />
        </label>
        <label className='flex flex-row justify-center gap-3 text-gray'>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='rounded-md bg-verydarkgray text-whitecream'
          />
        </label>

        <button type="submit" className="rounded-md bg-gray text-whitecream">
          Login
        </button>
      </form>

      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default Login;
