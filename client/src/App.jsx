import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import D3Element from './components/D3Element'
import Footer from './components/Footer'
import Faq from './components/Faq';
import Ai from './components/Ai';
function App() {
  return (
    <>
      <Navbar/>
      <D3Element/>
      <Ai/>
      <Faq/>
      <Footer/>
    </>
  );
}

export default App;