import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [interests, setInterests] = useState('');
  const [password, setPassword] = useState('');
  const [skills, setSkills] = useState('');
  const [email, setEmail] = useState('');
  const [availability, setAvailability] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/register', {
        name,
        phone,
        email,
        password,
        interests,
        skills,
        availability,
      });
      if (response.status === 200) {
        navigate('/login');
      } else {
        console.error('Error registering user:', response.error);
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="signup-container">
      <h1>Volunteer BRIDGE</h1>
      <form>
        <div className="form-group">
          <div class="form-item">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="textbox"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="form-item">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="textbox"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div class="form-item">
            <label htmlFor="username">Enter User ID</label>
            <input
              type="text"
              id="username"
              name="username"
              className="textbox"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div class="form-item">
            <label htmlFor="interests">Interests</label>
            <input
              type="text"
              id="interests"
              name="interests"
              className="textbox"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
            />
          </div>
          <div class="form-item">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="textbox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="form-item">
            <label htmlFor="skills">Skills</label>
            <input
              type="text"
              id="skills"
              name="skills"
              className="textbox"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>
          <div class="form-item">
            <label htmlFor="email">Email ID</label>
            <input
              type="email"
              id="email"
              name="email"
              className="textbox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="form-item">
            <label htmlFor="availability">Availability</label>
            <input
              type="text"
              id="availability"
              name="availability"
              className="textbox"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="submit" onClick={handleSignUp}>
          Sign-Up
        </button>
      </form>
    </div>
  );
};

export default Signup;