import React from 'react';
import '../output.css';

const Navbar = () => {
  return (
    <nav className='
    p-5 pr-8 pl-8 m-2 
    border-2 border-whitecream bg-black
    rounded-br-full rounded-tl-full 
    flex flex-row justify-center content-center gap-2 
    underline italic'>
        <a href="/home" className='hover:animate-pulse'>Home</a>
        <a href="/login" className='hover:animate-pulse'>Login</a>
        <a href="/registration" className='hover:animate-pulse'>Registration</a>
    </nav>
  );
};

export default Navbar;
