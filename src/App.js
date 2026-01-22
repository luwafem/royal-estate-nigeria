// App.js - Main Application Component
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PropertyListings from './pages/PropertyListings';
import PropertyDetails from './pages/PropertyDetails';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import { properties } from './data/properties';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [allProperties] = useState(properties);
  
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} />
      
        <Routes>
          <Route path="/" element={<HomePage properties={allProperties} />} />
          <Route path="/properties" element={<PropertyListings properties={allProperties} />} />
          <Route path="/property/:id" element={<PropertyDetails properties={allProperties} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      
    </Router>
  );
}

export default App; 