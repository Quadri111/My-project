import React from 'react';
import './navbar.css';


const Navbar = () => {
  return (
    <nav className="nav">
      <div className="my-title">Eventify</div>
      <ul>
        <li>About Us</li>
        <li className='bg-blue-500 text-white text-2xl font-semibold rounded-l-xl w-50 p-2 h-15 hover:bg-red-600'> Sign In</li>
        <li className='bg-red-500 text-white text-2xl font-semibold rounded-r-xl w-50 p-2 h-15 hover:bg-blue-600'>Register</li>
      </ul>
    </nav>
  );
};

export default Navbar;
