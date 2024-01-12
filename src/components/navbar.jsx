import React from 'react';
import '../output.css';
import { Link } from 'react-router-dom';
import '../output.css';

const Navbar = () => {
  return (
    <nav className='
    p-5 pr-8 pl-8 m-2 
    border-2 border-whitecream bg-black
    rounded-br-full rounded-tl-full 
    flex flex-row justify-center content-center gap-2 
    underline italic'>
      <Link to="/home" className='hover:animate-pulse'>Home</Link>
      <Link to="/login" className='hover:animate-pulse'>Login</Link>
      <Link to="/registration" className='hover:animate-pulse'>Registration</Link>
    </nav>
  );
};

export default Navbar;

