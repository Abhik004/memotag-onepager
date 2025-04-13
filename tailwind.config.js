/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // REQUIRED for toggle-based dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx}',       // If you're using the app/ directory (Next.js)
    './components/**/*.{js,ts,jsx,tsx}', // ✅ Includes your Hero, CTA, etc.
    './pages/**/*.{js,ts,jsx,tsx}',      // If using the older pages/ directory
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    animation: {
      'spin-slow': 'spin 20s linear infinite',
    },
  },
  plugins: [],
};
