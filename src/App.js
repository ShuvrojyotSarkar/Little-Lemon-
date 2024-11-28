import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import BookingPage from './components/BookingPage';
import AboutPage from './components/AboutPage.js';
import ContactPage from './components/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer.js';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/bookings" element={<BookingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
