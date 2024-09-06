import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyCard.css';

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <img src={`/product/images/${property.image}`} alt={property.name} className="property-img" />
      <div className="property-details">
        <h2>{property.name}</h2>
        <p>{property.price}</p>
        <Link to={`/property/${property.id}`}>View Details</Link> {/* Link to PropertyDetails */}
      </div>
    </div>
  );
}

export default PropertyCard;
