import React from 'react'
import './landing.css';
import Navbar from '../navbar/Navbar';

const Landing = () => {
  return (
    <div className='landing_container'>
        <div className='nav'>
          <Navbar/>
        </div>
        <div className='hands'>
            <a href='/'><img src='./assets/images.jpeg'/> </a>
        </div>
        <div className='join'>
          <p>We are building the bridge to the gap between people who need help and to the ones who can contribute. Join us.</p>
        </div>
    </div>
  )
}

export default Landing