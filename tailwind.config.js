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
  plugins: [],
};
