
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer'


import Navbar from '@/components/Navbar';

const Layout = () => {
  return (
    <>
      
        <Navbar />        
          

        <main className=' w-full border'>
        
          <div className='w-full min-h-[calc(100vh-50px)] pt-16'>
          
            <Outlet />

          </div>

          <Footer />

        </main>

      
    </>
  );
};

export default Layout;