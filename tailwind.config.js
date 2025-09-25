/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ important for dark mode toggle
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Axisol Brand Colors
        "bright-orange": "#f69f1f",
        "light-cream": "#fcf4e8",
        "deep-navy": "#1f2659",
        "olive-green": "#92aa36",
        "light-gray-green": "#cfd4c3",
        "dark-olive": "#5b712b",
        "slate-blue": "#40516d",
        "very-dark-green": "#1c2818",
        "off-white": "#f8fbfc",
        "medium-gray": "#8a9195",

        // Semantic color mappings for easier usage
        primary: "#f69f1f", // Bright Orange
        secondary: "#000000", // Black
        tertiary: "#111111", // Black-gray
        accent: "#92aa36", // Olive Green
        neutral: "#8a9195", // Medium Gray
        background: "#f8fbfc", // Off White
        surface: "#fcf4e8", // Light Cream
      },

      keyframes: {
        // Scroll reveal (fade in + blur + translateY)
        "fade-in-up": {
          "0%": {
            opacity: "0",
            filter: "blur(5px)",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            filter: "blur(0)",
            transform: "translateY(0)",
          },
        },

        // Timeline item scale (dot grows when visible)
        "scale-in": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },

        // Timeline progress grow (line fills downwards)
        "grow-down": {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "scale-in": "scale-in 0.5s ease forwards",
        "grow-down": "grow-down 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
