import './App.css';
import React from 'react';
import { Button } from './components/ui/button';
import Navbar from './components/Navbar';
import D3Element from './components/D3Element'

function App() {
  return (
    <>
      <Navbar/>
      <D3Element/>
    </>
  );
}

export default App;