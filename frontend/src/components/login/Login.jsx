import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login', {
        email: username,
        password,
      });
      if (response.status === 200) {
        console.log('Valid credentials! Logging in...');
        navigate('/dashboard');
      } else {
        console.log('Invalid credentials! Please try again.');
        setError('Invalid email or password');
      }
    } catch (error) {
      console.log('Error logging in:', error);
      setError('Error logging in');
    }
  };

  return (
    <div className='container'>
      <div className='left'>
        <div className='logo'>
          <img src='./assets/'/> 
        </div>
        <div className='welcome'>
          <p>Volunteer </p>
          <p>BRIDGE</p>
        </div>
      </div>
      <div className='vertical'/>
      <form className='Sign-in'>
        <div className='user'>
          <label htmlFor='username'>Email ID</label>
          <input
            type="text"
            id="username"
            className='textbox'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor='password'>Password</label>
          <input
            type="password"
            id="password"
            className='textbox'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <div style={{ color: 'ed' }}>{error}</div>}
          <div className='Sign-in'>
            <button id="Sign in" className='button' onClick={handleSignIn}>Login</button>
            <p>Don’t have an account? You can</p>
            <a href='/signup'><p> sign up here</p></a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;