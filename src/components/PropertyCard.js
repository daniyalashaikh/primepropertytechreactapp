import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={`http://localhost:8000${property.image}`} alt={property.name} className="property-image" />
      <h2 className="property-name">{property.name}</h2>
      <p className="property-price">{property.price}</p>
      <Link to={`/property/${property._id}`} className="view-details-button">
        View Details
      </Link>
    </div>
  );
};

export default PropertyCard;
