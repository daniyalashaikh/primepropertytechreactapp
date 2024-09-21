import React, { useState } from 'react';
import './StarRating.css'; // Ensure this path is correct

const StarRating = ({ rating, onChange }) => {
  const [hovered, setHovered] = useState(null);

  const handleClick = (index) => {
    onChange(index + 1);
  };

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`star ${index < (hovered ?? rating) ? 'filled' : ''}`}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave()}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
