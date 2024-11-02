// src/components/Locations.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { MapPinIcon } from '@heroicons/react/24/outline';

const Locations = () => {
  return (
    <section id="locations" className="py-12 bg-transparent">
      <div className="container mx-auto text-center">
        <h2
          className="text-4xl font-heading font-bold text-primary mb-6"
          data-aos="fade-up"
        >
          Our Locations
        </h2>
        {/* Flex Container to Center the Card */}
        <div className="flex justify-center">
          {/* Location Card */}
          <Link
            to="/locations/scottsdale" // Link to the details page
            className="block bg-orange-50 p-6 rounded-3xl shadow-2xl hover:shadow-custom-heavy transition duration-300 max-w-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Location Image */}
            <img
              src="/assets/location-image.jpg"
              alt="Unity Living Scottsdale Location"
              className="w-full h-auto mb-4 rounded-lg"
            />
            <MapPinIcon className="h-12 w-12 text-primary mx-auto mb-4" />

            <h3 className="text-2xl font-semibold text-text mb-2">
              Scottsdale, AZ
            </h3>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Locations;
