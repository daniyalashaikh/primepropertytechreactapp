import React from 'react';
import './Home.css'; // Ensure this path is correct

const Home = () => {
  return (
    <div className="home-page">
      <h1 className="home-header">Welcome to Prime Property Tech</h1>
      <p className="home-subheader">You will find the best property here</p>
      <div className="home-images">
        <img src="/product/images/property1.jpg" alt="Property 1" className="home-img" />
        <img src="/product/images/property2.jpg" alt="Property 2" className="home-img" />
        {/* Add more images as needed */}
      </div>
      <p className="home-message">Please select a category from the navigation bar to explore more.</p>
    </div>
  );
};

export default Home;
