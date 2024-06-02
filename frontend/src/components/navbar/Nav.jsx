import React, { useState } from 'react';
import "./navbar.css"
import axios from 'axios';

const Navbar = ({ setIsLoggedIn, isLoggedIn }) => {
  const handleSignOut = async () => {
    try {
      await axios.post('/logout');
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className='navbar_container'>
      <div className='title'>
        <p>Volunteer BRIDGE</p>
      </div>
      <div className='nav_links'>
        <a href="/dashboard">Dashboard</a>
        <a href="/list">List</a>
        <a href="/profile">Profile</a>
        <a href="/" onClick={handleSignOut}>Sign Out</a>
      </div>
    </div>
  )
}

export default Navbar;