import React, { useEffect, useState } from 'react';
import bg from './assets/background.jpg';
import Footer from './components/Footer';
import { Outlet, Link } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';

function App() {

  return (
    <>

      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})`, opacity: 0.65 }}
        ></div>

        {/* Content Layer */}
        <div className="relative z-10">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;