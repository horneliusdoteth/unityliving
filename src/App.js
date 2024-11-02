// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Locations from './components/Locations';
import Quote from './components/Quote';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import LocationDetails from './components/LocationDetails';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16">
          <Routes>
            {/* Home Page Route */}
            <Route
              path="/"
              element={
                <div className="container mx-auto px-4 py-12">
                  <AboutUs />

                  {/* Flex container for Quote and Locations */}
                  <div className="flex flex-col md:flex-row md:space-x-8 md:items-center">
                    {/* Quote Component */}
                    <div className="md:w-1/2 mb-8 md:mb-0">
                      <Quote />
                    </div>
                    {/* Locations Component */}
                    <div className="md:w-1/2">
                      <Locations />
                    </div>
                  </div>

                  <ContactUs />
                </div>
              }
            />
            {/* Location Details Route */}
            <Route path="/locations/scottsdale" element={<LocationDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
