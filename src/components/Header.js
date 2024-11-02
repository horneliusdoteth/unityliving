// src/components/Header.js
import React, { useState, useEffect } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [locationsOpen, setLocationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (navOpen) {
        // Do not hide header when mobile menu is open
        return;
      }

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and scrolled more than 50px
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, navOpen]);

  // Define a mid-gray color for the navigation links
  const navLinkColor = 'text-gray-700';

  return (
    <header
      className={`fixed w-full z-20 bg-white shadow-lg transition-transform duration-700 ease-in-out transform-gpu ${
        showHeader ? 'translate-y-0' : '-translate-y-[100%]'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Left Section: Logo and Brand Name */}
        <div className="flex items-center">
          <img
            src="/assets/unity_living_logo.webp"
            alt="Unity Living Logo"
            className="w-12 h-12 mr-3"
          />
          <HashLink
            to="/#top"
            className={`font-heading text-2xl font-bold ${navLinkColor}`}
          >
            Unity Living
          </HashLink>
        </div>

        {/* Center Section: Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <HashLink
            smooth
            to="/#about-us"
            className={`text-lg font-bold hover:text-secondary transition duration-300 ${navLinkColor}`}
          >
            About Us
          </HashLink>

          {/* Locations Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLocationsOpen(!locationsOpen)}
              className={`text-lg font-bold hover:text-secondary transition duration-300 flex items-center ${navLinkColor}`}
            >
              Locations
              <ChevronDownIcon className="h-5 w-5 ml-1" />
            </button>
            {locationsOpen && (
              <div className="absolute mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
                <Link
                  to="/locations/scottsdale"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setLocationsOpen(false)}
                >
                  Scottsdale
                </Link>
                {/* Add more locations here if needed */}
              </div>
            )}
          </div>

          <HashLink
            smooth
            to="/#contact-us"
            className={`text-lg font-bold hover:text-secondary transition duration-300 ${navLinkColor}`}
          >
            Contact Us
          </HashLink>
        </nav>

        {/* Right Section: Phone Number and Mobile Menu Button */}
        <div className="flex items-center">
          {/* Phone Number (Desktop) */}
          <a
            href="tel:6028101856"
            className={`hidden md:block ml-6 text-lg font-bold hover:text-secondary transition duration-300 ${navLinkColor}`}
          >
            (602) 810-1856
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setNavOpen(!navOpen)}
              aria-label="Toggle Menu"
            >
              {navOpen ? (
                <XMarkIcon className={`h-6 w-6 ${navLinkColor}`} />
              ) : (
                <Bars3Icon className={`h-6 w-6 ${navLinkColor}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {navOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <HashLink
            smooth
            to="/#about-us"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setNavOpen(false)}
          >
            About Us
          </HashLink>

          {/* Locations Dropdown */}
          <div className="border-t border-b border-gray-200">
            <button
              onClick={() => setLocationsOpen(!locationsOpen)}
              className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Locations
              <ChevronDownIcon className="h-5 w-5" />
            </button>
            {locationsOpen && (
              <div className="bg-white">
                <Link
                  to="/locations/scottsdale"
                  className="block px-6 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setNavOpen(false);
                    setLocationsOpen(false);
                  }}
                >
                  Scottsdale
                </Link>
                {/* Add more locations here if needed */}
              </div>
            )}
          </div>

          <HashLink
            smooth
            to="/#contact-us"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setNavOpen(false)}
          >
            Contact Us
          </HashLink>

          <a
            href="tel:6028101856"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 border-t border-gray-200"
          >
            (602) 810-1856
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
