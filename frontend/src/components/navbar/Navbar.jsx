import React from 'react';
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar_container'>
      <div className='title'>
        <p>Volunteer BRIDGE</p>
      </div>
      <div className='nav_links'>
        <a href="/donate">Donate</a>
        <a href='/login'>Login/Signup</a>
      </div>
    </div>
  )
}

export default Navbar