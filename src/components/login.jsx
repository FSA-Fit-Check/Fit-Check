import React from 'react';
import '../output.css';

const Login = () => {
  return (
    <div className='bg-black rounded-xl p-3 drop-shadow-lg border-2 border-whitecream'>
      <form className='flex flex-col gap-3'>
        <h1 className='text-xl text-whitecream font-serif italic'>User Log-in Form</h1>
        <label className='flex flex-row justify-center gap-3 text-gray'>
            Username:
            <input type="text" name="name"
            className='rounded-md bg-verydarkgray text-whitecream'/>
        </label>
        <label className='flex flex-row justify-center gap-3 text-gray'>
            Password:
            <input type="password" name="password"
            className='rounded-md bg-verydarkgray text-whitecream' /><br/>
        </label>
      </form>
    </div>
  );
};

export default Login;