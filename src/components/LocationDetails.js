// src/components/LocationDetails.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/solid';
import { HashLink } from 'react-router-hash-link';

const images = [
  '/assets/front.webp',
  '/assets/kitchen.webp',
  '/assets/bedroom 1.webp',
  '/assets/bedroom 2.webp',
  // Add more images if available
];

// Custom styles for react-modal
const customStyles = {
  content: {
    inset: '50% auto auto 50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    border: 'none',
    background: 'transparent',
    overflow: 'hidden',
    maxWidth: '90vw',
    maxHeight: '90vh',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    zIndex: 1000,
  },
};

Modal.setAppElement('#root');

const LocationDetails = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Open modal and set the selected image index
  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Navigate to previous image
  const prevImage = () => {
    setSelectedImageIndex(
      selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1
    );
  };

  // Navigate to next image
  const nextImage = () => {
    setSelectedImageIndex(
      selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1
    );
  };

  const features = [
    'Spacious living areas',
    'Modern kitchen facilities',
    'Outdoor recreational spaces',
    'Close proximity to support services',
    'Laundry facilities with washer and dryer',
    'Back patio with grill',
    '55" TV with Netflix and Sling subscriptions',
    'Private individual food storage cabinets',
    'Three refrigerators',
    'Three bathrooms (3-4 people per bathroom)',
  ];

  return (
    <section className="py-12 background">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-heading font-bold text-primary mb-6"
          data-aos="fade-up"
        >
          Scottsdale, AZ Location
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => openModal(index)}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={image}
                alt={`View ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-semibold">View Photo</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Image Preview */}
        {modalIsOpen && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Image Preview"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none z-10"
            >
              &times;
            </button>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl focus:outline-none z-10"
            >
              <ChevronLeftIcon className="h-10 w-10" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl focus:outline-none z-10"
            >
              <ChevronRightIcon className="h-10 w-10" />
            </button>
            <img
              src={images[selectedImageIndex]}
              alt={`View ${selectedImageIndex + 1}`}
              className="w-full h-auto max-h-screen object-contain"
            />
          </Modal>
        )}

        {/* Location Description */}
        <div className="mt-12 font-semibold" data-aos="fade-up">
          <p className="text-lg text-text leading-relaxed mb-8">
            Our Scottsdale location offers a serene environment for recovery.
            Nestled in the heart of Scottsdale, it provides easy access to local
            amenities while ensuring a peaceful atmosphere for our residents.
          </p>

          <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
            Features of this Location
          </h3>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-3" />
                <p className="text-lg text-text">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Locations Button */}
        <div className="mt-8">
          <HashLink
            smooth
            to="/#locations"
            className="inline-block px-6 py-3 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary-dark transition duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            Back
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default LocationDetails;
