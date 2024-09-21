import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PropertyDetails.css'; // Ensure this path is correct

// Example data should be fetched from an API or state management in a real-world scenario
// const properties = {
//   1: {
//     id: 1,
//     type: 'Residential House',
//     name: 'House A',
//     price: '$300,000',
//     description: 'A beautiful house in a great location.',
//   },
//   2: {
//     id: 2,
//     type: 'Residential Plot',
//     name: 'Plot A',
//     price: '$150,000',
//     description: 'A prime residential plot available for development.',
//   },
//   3: {
//     id: 3,
//     type: 'Commercial Plot',
//     name: 'Commercial Plot A',
//     price: '$500,000',
//     description: 'An excellent location for commercial ventures.',
//   },
//   4: {
//     id: 4,
//     type: 'Shop',
//     name: 'Shop A',
//     price: '$200,000',
//     description: 'A prime location shop available for sale.',
//   },
//   // New properties
//   5: {
//     id: 5,
//     type: 'Residential House',
//     name: 'House B',
//     price: '$350,000',
//     description: 'A spacious house with modern amenities.',
//   },
//   6: {
//     id: 6,
//     type: 'Commercial Plot',
//     name: 'Commercial Plot B',
//     price: '$600,000',
//     description: 'A high-traffic area commercial plot.',
//   },
//   // Add more properties as needed
// };

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState({})
  const fetchProperty = async () => {
    const res = await fetch(`http://localhost:8000/product/${id}`)
    const resJson = await res.json()
    console.log('resJson.properties', resJson)
    setProperty(resJson)
  }
  // const property = properties[id] || {};
  useEffect(() => {
    fetchProperty()
  }, [])
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Reset the form data after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
    });
  };

  return (
    <div className="property-details-page">
      <h1>{property.name}</h1>
      <p>Type: {property.type}</p>
      <p>Price: {property.price}</p>
      <p>{property.description}</p>

      {!showForm && !formSubmitted && (
        <button onClick={() => setShowForm(true)}>Get Quote</button>
      )}

      {showForm && !formSubmitted && (
        <form onSubmit={handleSubmit} className="quote-form">
          <h3>Get a Quote for {property.name}</h3>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}

      {formSubmitted && (
        <div className="success-message">
          <h3>Form submitted successfully!</h3>
          <p>The respective property dealer will reach out to you soon via the provided email or phone number.</p>
        </div>
      )}
    </div>
  );
}

export default PropertyDetails;
