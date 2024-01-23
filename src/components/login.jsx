import React, { useState } from 'react';
import '../output.css';

const Login = () => {
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
        if (data.token) {
        setResponseMessage(`Login successful!`);
        // Perform any actions for successful login, e.g., redirect to another page
      } else {
        setResponseMessage(`Token not received..`);
        // Handle unsuccessful login, e.g., show an error message
      }
    } else if (data.message === 'Invalid credentials') {
      setResponseMessage(`Login failed. Invalid credentials.`);
      // Handle unsuccessful login, e.g., show an error message
    } else {
      setResponseMessage(`Login failed due to an unknown error.`);
      // Handle other errors, e.g., network issues or server errors
    }
  } catch (error) {
    setResponseMessage(`Error during login: ${error}`);
    console.error('Error during login:', error);
    // Handle other errors, e.g., network issues
  }
  };

  return (
    <div className='bg-black rounded-xl p-3 drop-shadow-lg border-2 border-whitecream'>
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
