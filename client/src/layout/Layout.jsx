
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer'


import Navbar from '@/components/Navbar';

const Layout = () => {
  return (
    <>
      
        <Navbar />        
          

        <main className=' w-full p-0 m-0'>
        
          <div className='w-full min-h-[calc(100vh-50px)] pt-0 '>
          
            <Outlet />

          </div>

          <Footer />

        </main>

      
    </>
  );
};

export default Layout;