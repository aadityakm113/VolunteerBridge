import React from 'react'

const Signup = () => {
  return (
    <div className="signup-container">
      <h1>Volunteer BRIDGE</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <div className="form-group">
          <label htmlFor="username">Enter User ID</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="interests">Interests</label>
          <input type="text" id="interests" name="interests" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="form-group">
          <label htmlFor="skills">Skills</label>
          <input type="text" id="skills" name="skills" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email ID</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="availability">Availability</label>
          <input type="text" id="availability" name="availability" />
        </div>
        <button type="submit">Sign-Up</button>
      </form>
    </div>
  )
}

export default Signup