import './App.css';
import React from 'react';
import { Button } from './components/ui/button';
import Navbar from './components/Navbar';
import D3Element from './components/D3Element'
import Footer from './components/Footer'
import Ai from './components/Ai';

function App() {
  return (
    <>
      <Navbar/>
      <D3Element/>
      <div className=" w-62 h-62 p-0 fixed bottom-6 right-12   z-50 p-0">
      <Ai/>
      </div>
      
      <Footer/>
    </>
  );
}

export default App;