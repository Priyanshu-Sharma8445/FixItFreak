import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
<<<<<<< HEAD
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
=======
import D3Element from './components/D3Element';
import Footer from './components/Footer';
import Card from './components/Card';
import myImage from './assets/plumber.jpg'; // Adjusted path
import myImage2 from './assets/electrician.jpeg'; // Adjusted path
import myImage3 from './assets/cleaning.jpg'; // Adjusted path
import myImage4 from './assets/carpentary.jpg'; // Adjusted path

function App() {
  return (
    <>
      <Navbar />
      <D3Element />
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
      <Footer />
>>>>>>> 44b683eaa8d9994b53749259e58da73121319e9d
    </>
  );
}

export default App;