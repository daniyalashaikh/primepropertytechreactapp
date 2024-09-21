import React from 'react';
import Select from 'react-select';

// Define custom styles
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#f0f0f0' : 'white', // Change background on hover
    color: state.isFocused ? '#333' : '#000', // Change text color on hover
    cursor: 'pointer', // Cursor style
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 9999, // Ensure the dropdown appears above other elements
  }),
  control: (provided) => ({
    ...provided,
    boxShadow: 'none', // Remove default box-shadow
    border: '1px solid #ccc', // Add border
    '&:hover': {
      border: '1px solid #007bff', // Change border color on hover
    },
  }),
};

const options = [
  { value: 'residential-house', label: 'Residential House' },
  { value: 'residential-plot', label: 'Residential Plot' },
  { value: 'commercial-plot', label: 'Commercial Plot' },
  { value: 'shop', label: 'Shop' }
];

function Dropdown() {
  return (
    <Select
      options={options}
      placeholder="Select a category"
      className="basic-single"
      classNamePrefix="select"
      styles={customStyles} // Apply custom styles
    />
  );
}

export default Dropdown;
