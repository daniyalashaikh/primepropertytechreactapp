import React from 'react';
import './Contact.css'; // Ensure this path is correct

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-form-container">
        <form className="contact-form">
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

export default Contact;
