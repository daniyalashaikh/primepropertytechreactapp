import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Contact from './pages/Contact';
import About from './pages/About';
import Feedback from './pages/Feedback';
import PropertyDetails from './components/PropertyDetails';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
