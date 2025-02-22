import './App.css';
import React from 'react';
import { Button } from './components/ui/button';
import Navbar from './components/Navbar';
import D3Element from './components/D3Element'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <D3Element/>
      <Footer/>
    </>
  );
}

export default App;