import React from 'react';
import { useParams } from 'react-router-dom';

const propertiesData = {
  1: { name: 'House A', price: '$300,000', image: 'house1.jpg', description: 'Description for House A' },
  2: { name: 'House B', price: '$350,000', image: 'house2.jpg', description: 'Description for House B' },
  3: { name: 'Plot A', price: '$150,000', image: 'plot1.jpg', description: 'Description for Plot A' },
  4: { name: 'Commercial Plot A', price: '$500,000', image: 'commercial1.jpg', description: 'Description for Commercial Plot A' },
  5: { name: 'Shop A', price: '$200,000', image: 'shop1.jpg', description: 'Description for Shop A' }
};

function PropertyDetails() {
  const { id } = useParams();
  const property = propertiesData[id];

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="property-details-page">
      <h1>{property.name}</h1>
      <img src={`/product/images/${property.image}`} alt={property.name} />
      <p>{property.price}</p>
      <p>{property.description}</p>
    </div>
  );
}

export default PropertyDetails;
