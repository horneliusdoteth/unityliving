// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5B7AB9',    // Indigo
        secondary: '#FF5722',  // Deep Orange
        background: '#F5F5F5', // Light Gray
        text: '#212121',       // Dark Gray
        accent: '#00BCD4',     // Cyan
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        heading: ['"Montserrat"', 'sans-serif'],
      },
      boxShadow: {
        'custom-light': '0 2px 10px rgba(0, 0, 0, 0.1)',
        'custom-heavy': '0 4px 20px rgba(0, 0, 0, 0.2)',
      },
      keyframes: {
        fadeInAndPulse: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        colorFade: {
          '0%': { color: '#FF5722' },
          '50%': { color: '#5B7AB9' },
          '100%': { color: '#FF5722' },
        },
        fadeScale: {
          '0%': { opacity: '0', transform: 'scale(0.25)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        fadeInAndPulse: 'fadeInAndPulse 4s ease-in-out infinite alternate',
        float: 'float 3s ease-in-out infinite',
        colorFade: 'colorFade 6s ease-in-out infinite',
        fadeScale: 'fadeScale 3.5s ease-out',
      },
    },
  },
  plugins: [],
};