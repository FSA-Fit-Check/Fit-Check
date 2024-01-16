import React, { useState } from 'react';
import '../output.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Username:', username);
    console.log('Password:', password);

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

      if (data.success) {
        console.log('Login successful');
        // Perform any actions for successful login, e.g., redirect to another page
      } else {
        console.log('Login failed. Invalid credentials');
        // Handle unsuccessful login, e.g., show an error message
      }
    } catch (error) {
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
