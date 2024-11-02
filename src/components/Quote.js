// src/components/Quote.js
import React from 'react';

const Quote = () => {
  return (
    <section
      id="quote"
      className="py-24 bg-fixed bg-center bg-cover text-black"
      style={{ backgroundImage: 'url(/assets/quote-bg.jpg)' }}
    >
      <div className="container mx-auto text-center" data-aos="zoom-in">
      <blockquote className="text-4xl italic font-heading leading-relaxed max-w-3xl mx-auto animate-fadeScale">
  "ADDICTION is giving up everything you love for one thing, RECOVERY is giving up one thing for everything you love"
</blockquote>

      </div>
    </section>
  );
};

export default Quote;
