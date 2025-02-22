import './App.css';
import React from 'react';
import { Button } from './components/ui/button';
import Navbar from './components/Navbar';
import D3Element from './components/D3Element'
import Footer from './components/Footer'
import FAQ from './components/FAQ';
function App() {
  return (
    <>
      <Navbar/>
      <D3Element/>
      <FAQ/>
      <Footer/>
    </>
  );
}

export default App;