import React from 'react';
import PropertyCard from './PropertyCard';
import house1 from '../assets/house1.jpg';
import plot1 from '../assets/plot1.jpg';
import commercial1 from '../assets/commercial1.jpg';
import shop1 from '../assets/shop1.jpg';

const properties = [
  { id: 1, name: 'Residential House', price: 'PKR 300,000', image: house1 },
  { id: 2, name: 'Residential Plot', price: 'PKR 150,000', image: plot1 },
  { id: 3, name: 'Commercial Plot', price: 'PKR 500,000', image: commercial1 },
  { id: 4, name: 'Shop', price: 'PKR 200,000', image: shop1 },
];

function PropertyList() {
  return (
    <div className="property-list">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

export default PropertyList;
