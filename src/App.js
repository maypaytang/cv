import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import Hero from './components/Hero';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
      </>
  );
}

export default App;
