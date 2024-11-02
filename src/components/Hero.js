// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-primary text-white flex items-center h-screen">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Welcome to Unity Living</h1>
        <p className="text-xl md:text-2xl mb-8">A supportive environment for your recovery journey.</p>
        <a href="#contact-us" className="inline-block px-8 py-4 bg-accent text-white rounded-full text-lg font-semibold hover:bg-red-600 transition duration-300">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
