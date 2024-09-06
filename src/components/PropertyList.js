import React from 'react';
import PropertyCard from './PropertyCard';

const properties = [
  { id: 1, name: 'Residential House', price: '$300,000', image: 'house1.jpg' },
  { id: 2, name: 'Residential Plot', price: '$150,000', image: 'plot1.jpg' },
  { id: 4, name: 'Residential House', price: '$300,000', image: 'house1.jpg' },
  { id: 5, name: 'Residential Plot', price: '$150,000', image: 'plot1.jpg' },
  // Add more properties here
];

function PropertyList() {
  return (
    <div className="property-list">
      {properties.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

export default PropertyList;
