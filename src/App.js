import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/country/:cca3" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
