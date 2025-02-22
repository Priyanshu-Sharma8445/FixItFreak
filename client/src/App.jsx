import './App.css';
import React from 'react';
import { Button } from './components/ui/button';
import Navbar from './components/Navbar';
import D3Element from './components/D3Element'
import Footer from './components/Footer'
import Ai from './components/Ai';
import Card from './components/Card';
import myImage from './assets/plumber.jpg'; 
import myImage2 from './assets/electrician.jpeg'; 
import myImage3 from './assets/cleaning.jpg'; 
import myImage4 from './assets/carpentary.jpg'; 
import FAQ from './components/Questions';


function App() {
  return (
    <>
      <Navbar/>
      <D3Element/>
      <div className=" w-62 h-62 p-0 fixed bottom-6 right-12   z-50 p-0">
      <Ai/>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', backgroundColor: '#111827', padding: '20px' }}>
        <Card
          image={myImage}
          heading="Plumbing"
          description="Fix common issues like leaky faucets, clogged drains, and running toilets using basic tools and simple techniques."
        />
        <Card
          image={myImage2}
          heading="Electrician"
          description="Handle tasks like replacing outlets, fixing light fixtures, and troubleshooting minor electrical faults safely."
        />
        <Card
          image={myImage3}
          heading="Cleaning"
          description="Maintain a clean home by tackling tough stains, organizing spaces, and using effective cleaning solutions."
        />
        <Card
          image={myImage4}
          heading="Carpentry"
          description="Perform basic woodwork repairs, assemble furniture, and install shelves or cabinets with essential tools."
        />
      </div>
      <FAQ/>

      
      <Footer/>
    </>
  );
}

export default App;