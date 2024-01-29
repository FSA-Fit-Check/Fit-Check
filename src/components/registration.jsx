import {React, useState} from 'react';

const Registration = ({setUserId}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('default@default.com');
  const [responseMessage, setResponseMessage] = useState(null);

  const handleSubmit = async(event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          email,
        }),
      });

      const result = await response.json();

      if (result.ok && result.newUser && result.newUser.id) {
        const loginResponse = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });
        const loginResult = await loginResponse.json();
        if (loginResponse.ok && loginResult.token) {
          window.localStorage.setItem('TOKEN', loginResult.token);
        }

        setResponseMessage(`Registration successful!`);
        setUserId(result.newUser.id, result.newUser.username);
        setUsername(result.newUser.username);
        return;
      } else {
        setResponseMessage(result.error);
      }
      
    } catch (error) {
      setResponseMessage(`Error during registration.`);
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className='panel'>
      <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
        <h1 className='text-xl text-whitecream font-serif italic'>User Registration Form</h1>
        <label className='flex flex-row justify-center gap-3 text-gray'>
            Username:
            <input type="text" name="name"
            onChange={(event) => setUsername(event.target.value)}
            className='rounded-md bg-verydarkgray text-whitecream'
            />
        </label>
        <label className='flex flex-row justify-center gap-3 text-gray'>
            Email:
            <input type="email" name="email"
            onChange={(event) => setEmail(event.target.value)}
            className='rounded-md bg-verydarkgray text-whitecream'
            />
        </label>
        <label className='flex flex-row justify-center gap-3 text-gray'>
            Password:
            <input type="password" name="password"
            onChange={(event) => setPassword(event.target.value)}
            className='rounded-md bg-verydarkgray text-whitecream'
            />
        </label>

        <button type="submit" className="rounded-md bg-gray text-whitecream">
          Create Account
        </button>
      </form>

      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default Registration;