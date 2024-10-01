/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,tsx,jsx,ts}",
    "./src/pages/**/*.{js,tsx,jsx,tsx}",
    "./src/components/**/*.{js,tsx,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E50914",
        secondary: "#060f19",
        "primary-light": "#282841",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-thin": {
          "scrollbar-width": "thin",
        },
        ".scrollbar-thumb-rounded": {
          "scrollbar-color": "#888 #333",
          "scrollbar-track-color": "#333",
        },
        ".scrollbar-thumb-rounded::-webkit-scrollbar": {
          width: "8px",
        },
        ".scrollbar-thumb-rounded::-webkit-scrollbar-thumb": {
          "background-color": "#888",
          "border-radius": "4px",
        },
        ".scrollbar-thumb-rounded::-webkit-scrollbar-thumb:hover": {
          "background-color": "#555",
        },
        ".scrollbar-thumb-rounded::-webkit-scrollbar-track": {
          "background-color": "#333",
        },
      });
    },
  ],
};
