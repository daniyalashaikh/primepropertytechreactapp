import React, { useEffect, useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import './Home.css'; // Ensure this path is correct
import houseImg1 from '../images/DHA.jpg';
import houseImg2 from '../images/bhukkari.jpg';
import plotImg from '../images/residential plot.jpg'; // Add your image here
import commercialImg from '../images/commercial plot.jpg'; // Add your image here
import shopImg from '../images/homo.PNG'; // Add your image here

const propertiesData = {
  'Residential House': [
    { id: 1, name: 'House A', price: '$300,000', image: houseImg1 },
    { id: 2, name: 'House B', price: '$350,000', image: houseImg2 }
  ],
  'Residential Plot': [
    { id: 3, name: 'Plot A', price: '$150,000', image: plotImg }
  ],
  'Commercial Plot': [
    { id: 4, name: 'Commercial Plot A', price: '$500,000', image: commercialImg }
  ],
  'Shop': [
    { id: 5, name: 'Shop A', price: '$200,000', image: shopImg }
  ]
};

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [properties, setProperties] = useState([])
  // const [properties, setProperties] = useState([]);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    // setProperties(propertiesData[category] || []);
  };
  const fetchProperties = async () => {
    const res = await fetch(`http://localhost:8000/fetch?category=${selectedCategory}`)
    const resJson = await res.json()
    console.log('resJson.properties', resJson)
    setProperties(resJson)
  }
  useEffect(() => {
    fetchProperties()
  }, [selectedCategory])
  return (
    <div className="home-page">
      <h1 className="home-header">Welcome to Prime Property Tech</h1>
      <p className="home-subheader"><b>You will find the best property here</b></p>
      <p className="home-message"><b>Please select a category from the dropdown to explore more.</b></p>
      <select value={selectedCategory} onChange={handleCategoryChange} className="category-dropdown">
        <option value="">Select a category</option>
        <option value="Residential House">Residential House</option>
        <option value="Residential Plot">Residential Plot</option>
        <option value="Commercial Plot">Commercial Plot</option>
        <option value="Shop">Shop</option>
      </select>
      <div className="contact-message">
        <b>To sell your property, contact us on</b>
        <br />
        <div className="whatsapp-box">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="property-list">
        {properties.map(property => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Home;
