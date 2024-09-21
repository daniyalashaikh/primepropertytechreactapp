import React, { useState } from 'react';
import './UploadProperty.css'; // Add custom styling here if needed
import axios from 'axios'; // Import axios for making HTTP requests

const UploadProperty = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    // setError('');
    // setSuccess('');

    // if (!image) {
    //   setError('Please upload an image.');
    //   setLoading(false);
    //   return;
    // }

    try {
      // Upload the image to the server
      const formData = new FormData();
      formData.append('name', name);
      formData.append('category', category);
      formData.append('price', price);
      formData.append('image', image);
      formData.append('description', description);

      const imageResponse = await axios.post('http://localhost:8000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      // Get the image URL from the response
      const imageUrl = imageResponse;

      // Now send the property details to the server
      const propertyData = {
        title: name,
        category,
        price,
        description,
        imageUrl,
      };

      const propertyResponse = await axios.post('http://localhost:8000/upload', propertyData);

      setSuccess('Property uploaded successfully!');
      console.log('Property uploaded:', propertyResponse.data);
    } catch (error) {
      console.error('Error uploading property:', error);
      setError('An error occurred while uploading the property.');
    } finally {
      setLoading(false);
      setName('');
      setCategory('');
      setPrice('');
      setImage(null);
      setDescription('');
    }
  };

  return (
    <div className="upload-property">
      <h2>Upload Property</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Property Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="Residential House">Residential House</option>
            <option value="Residential Plot">Residential Plot</option>
            <option value="Commercial Plot">Commercial Plot</option>
            <option value="Shop">Shop</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            accept="image/*"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Uploading...' : 'Upload Property'}
        </button>
      </form>
    </div>
  );
};

export default UploadProperty;
