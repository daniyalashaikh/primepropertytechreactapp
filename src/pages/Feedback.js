import React, { useState } from 'react';
import './Feedback.css'; // Ensure this path is correct
import StarRating from '../components/StarRating'; // Ensure this path is correct

const Feedback = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="feedback-page">
      <h1 className="feedback-title">Feedback</h1>
      <div className="feedback-form-container">
        <form className="feedback-form">
          
          
          <label htmlFor="feedback">Feedback</label>
          <textarea id="feedback" name="feedback" placeholder="Your Feedback" required></textarea>

          <label>Rating</label>
          <StarRating rating={rating} onChange={handleRatingChange} />
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
