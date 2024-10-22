import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home'; 
import Invitacion from './components/Invitacion'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Invitacion />} /> 
        <Route path="/Invitacion" element={<Invitacion />} /> 
      </Routes>
    </Router>
  );
}

export default App;
