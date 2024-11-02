// src/components/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <section id="about-us" className="py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center" data-aos="fade-up">
        {/* Image */}
        <div className="md:w-1/2" data-aos="fade-right">
          <img
            src="/assets/about-us.webp"
            alt="About Unity Living"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
        {/* Text Content */}
        <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0" data-aos="fade-left">
          <h2 className="text-4xl font-heading font-bold text-primary mb-6">About Us</h2>
          <p className="text-lg leading-relaxed text-text">
            We provide a <span className="text-secondary font-semibold">safe</span> and <span className="text-secondary font-semibold">supportive</span> environment for individuals in recovery, aiming to help them reintegrate into society.
          </p>
          <a href="#contact-us" className="inline-block mt-8 px-6 py-3 bg-primary text-white rounded-full text-lg font-semibold hover:bg-indigo-600 transition duration-300 transform hover:-translate-y-1 hover:shadow-custom-light">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
