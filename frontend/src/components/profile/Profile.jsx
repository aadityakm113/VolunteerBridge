import React from 'react';
import './profile.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const handleChanges = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    navigate('/dashboard');
  };

  return (
    <div className="signup-container">
      <h1>Volunteer BRIDGE</h1>
      <div className='arrow'>
        <a href='/dashboard'><box-icon name='arrow-back'></box-icon></a>
      </div>
      <div className='profile'>
        <p>Profile</p>
      </div>
      <form onSubmit={handleChanges}>
        <div className="form-group">
          <div className="form-item">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className='textbox' />
          </div>
          <div className="form-item">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" className='textbox' />
          </div>
          <div className="form-item">
            <label htmlFor="username">Enter User ID</label>
            <input type="text" id="username" name="username" className='textbox' />
          </div>
          <div className="form-item">
            <label htmlFor="interests">Interests</label>
            <input type="text" id="interests" name="interests" className='textbox' />
          </div>
          <div className="form-item">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" className='textbox' />
          </div>
          <div className="form-item">
            <label htmlFor="skills">Skills</label>
            <input type="text" id="skills" name="skills" className='textbox' />
          </div>
          <div className="form-item">
            <label htmlFor="email">Email ID</label>
            <input type="email" id="email" name="email" className='textbox' />
          </div>
          <div className="form-item">
            <label htmlFor="availability">Availability</label>
            <input type="text" id="availability" name="availability" className='textbox' />
          </div>
        </div>
        <button type="submit" className='submit' onClick={handleChanges}>Save Changes</button>
      </form>
    </div>
  );
}

export default Signup;
