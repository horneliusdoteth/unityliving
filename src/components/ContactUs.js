import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact-us" className="py-12 bg-orange-50 rounded-3xl shadow-2xl">
      <div className="max-w-3xl mx-auto px-4" data-aos="fade-up">
        <h2 className="text-4xl font-heading font-bold text-primary mb-6 text-center">
          Contact Us
        </h2>
        <p className="text-xl text-text mb-8 text-center">
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
              className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-text peer"
              placeholder=" "
            />
            <label htmlFor="full-name" className="absolute left-4 top-2 text-gray-500 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-sm">
              Full Name
            </label>
          </div>
          {/* Phone Number */}
          <div className="relative">
            <input
              type="tel"
              id="phone-number"
              name="phone-number"
              required
              className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-text peer"
              placeholder=" "
            />
            <label htmlFor="phone-number" className="absolute left-4 top-2 text-gray-500 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-sm">
              Phone Number
            </label>
          </div>
          {/* Email */}
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-text peer"
              placeholder=" "
            />
            <label htmlFor="email" className="absolute left-4 top-2 text-gray-500 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-sm">
              Email
            </label>
          </div>
          {/* Length of Sobriety */}
          <div className="relative">
            <input
              type="text"
              id="length-of-sobriety"
              name="length-of-sobriety"
              required
              className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-text peer"
              placeholder=" "
            />
            <label htmlFor="length-of-sobriety" className="absolute left-4 top-2 text-gray-500 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-sm">
              Length of Sobriety
            </label>
          </div>
           {/* Treatment Center */}
           <div className="relative">
            <select
              id="treatment-center"
              name="treatment-center"
              required
              className="w-full pt-5 pb-4 px-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-text peer appearance-none"
            >
              <option value="" disabled selected hidden></option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label
              htmlFor="treatment-center"
              className="absolute left-4 top-2 text-gray-500 text-base transition-all duration-200 peer-focus:text-sm"
            >
              Will you be coming directly from a treatment center?
            </label>
            {/* Dropdown Arrow Icon */}
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 10l5 5 5-5"
                stroke="#6B7280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Waiting List */}
          <div className="relative">
            <select
              id="waiting-list"
              name="waiting-list"
              required
              className="w-full pt-5 pb-4 px-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-text peer appearance-none"
            >
              <option value="" disabled selected hidden></option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label
              htmlFor="waiting-list"
              className="absolute left-4 top-2 text-gray-500 text-base transition-all duration-200 peer-focus:text-sm"
            >
              Are you willing to be placed on a waiting list?
            </label>
            {/* Dropdown Arrow Icon */}
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 10l5 5 5-5"
                stroke="#6B7280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-4 bg-primary text-white rounded-full text-lg font-semibold hover:bg-indigo-600 transition duration-300 transform hover:-translate-y-1 hover:shadow-custom-light"
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
