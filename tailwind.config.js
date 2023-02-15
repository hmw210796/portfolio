/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "rgb(0, 0, 35)",
        purple: "rgb(64, 120, 224)",
      },
    },
  },
  plugins: [],
};
