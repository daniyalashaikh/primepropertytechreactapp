import React from 'react';
import './Help.css'; // Ensure this path is correct

const Help = () => {
  return (
    <div className="help-page">
      <h1 className="help-title">help</h1>
      <div className="help-form-container">
        <form className="help-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
          
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" required></textarea>
          
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Help;
