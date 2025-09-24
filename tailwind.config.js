/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ important for dark mode toggle
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Axisol Brand Colors
        'bright-orange': '#f69f1f',
        'light-cream': '#fcf4e8',
        'deep-navy': '#1f2659',
        'olive-green': '#92aa36',
        'light-gray-green': '#cfd4c3',
        'dark-olive': '#5b712b',
        'slate-blue': '#40516d',
        'very-dark-green': '#1c2818',
        'off-white': '#f8fbfc',
        'medium-gray': '#8a9195',
        
        // Semantic color mappings for easier usage
        primary: '#f69f1f', // Bright Orange
        secondary: '#000000', // Black
        accent: '#92aa36', // Olive Green
        neutral: '#8a9195', // Medium Gray
        background: '#f8fbfc', // Off White
        surface: '#fcf4e8', // Light Cream
      },
    },
  },
  plugins: [],
};
