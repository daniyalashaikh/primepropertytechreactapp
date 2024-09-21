import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import About from './pages/About';
import Feedback from './pages/Feedback';
import Help from './pages/Help'; // Import Help component
import PropertyDetails from './components/PropertyDetails';
import Footer from './components/Footer'; 
import UploadProperty from './pages/UploadProperty';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/help" element={<Help />} /> {/* Replace Contact with Help */}
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/upload-property" element={<UploadProperty />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
