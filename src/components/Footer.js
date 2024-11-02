// src/components/Footer.js
import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center mb-6 md:mb-0">
            <img
              src="/assets/unity_living_logo_white.webp"
              alt="Unity Living Logo"
              className="w-12 h-12 mr-3"
            />
            <HashLink to="/#top" className="font-heading text-2xl font-bold">
              Unity Living
            </HashLink>
          </div>
          {/* Navigation Links */}
          <nav className="flex space-x-6 mb-6 md:mb-0">
            <HashLink
              smooth
              to="/#about-us"
              className="hover:text-secondary transition duration-300"
            >
              About Us
            </HashLink>
            <HashLink
              smooth
              to="/#locations"
              className="hover:text-secondary transition duration-300"
            >
              Locations
            </HashLink>
            <HashLink
              smooth
              to="/#contact-us"
              className="hover:text-secondary transition duration-300"
            >
              Contact Us
            </HashLink>
          </nav>
        </div>
        <div className="text-center text-sm">
          © {new Date().getFullYear()} Unity Living. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
