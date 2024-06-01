import React from 'react'
import './landing.css';
const Landing = () => {
  return (
    <div className='landing_container'>
        <div className='nav'>
            <h1>Volunteer Bridge</h1>
            <a href='/donate'><h2>Donate</h2></a>
            <a href="/login"><h2>Login/Sign Up</h2></a>
        </div>
    </div>
  )
}

export default Landing