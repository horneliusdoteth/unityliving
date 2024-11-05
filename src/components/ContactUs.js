import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact-us" className="py-12">
      <div className="max-w-3xl mx-auto px-4" data-aos="fade-up">
        <h2 className="text-4xl font-heading font-bold text-primary mb-6 text-center">
          Contact Us
        </h2>
        <p className="text-xl mb-8 text-center">
          Leave us your information below, and we will be in touch!
        </p>
        <form className="space-y-6">
          {/* Full Name */}
          <div className="relative">
            <input
              type="text"
              id="full-name"
              name="full-name"
              required
              className="w-full p-4 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-secondary"
              placeholder="Full Name"
            />
          </div>
          {/* Phone Number */}
          <div className="relative">
            <input
              type="tel"
              id="phone-number"
              name="phone-number"
              required
              className="w-full p-4 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-secondary"
              placeholder="Phone Number"
            />
          </div>
          {/* Email */}
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-4 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-secondary"
              placeholder="Email"
            />
          </div>
          {/* Length of Sobriety */}
          <div className="relative">
            <input
              type="text"
              id="length-of-sobriety"
              name="length-of-sobriety"
              required
              className="w-full p-4 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-secondary"
              placeholder="Length of Sobriety"
            />
          </div>
          {/* Treatment Center */}
          <div className="relative">
            <select
              id="treatment-center"
              name="treatment-center"
              required
              className="w-full p-4 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-secondary"
            >
              <option value="" disabled selected hidden>
                Will you be coming directly from a treatment center?
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          {/* Waiting List */}
          <div className="relative">
            <select
              id="waiting-list"
              name="waiting-list"
              required
              className="w-full p-4 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-secondary"
            >
              <option value="" disabled selected hidden>
                Are you willing to be placed on a waiting list?
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-secondary text-white rounded-full text-lg font-medium hover:bg-red-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

