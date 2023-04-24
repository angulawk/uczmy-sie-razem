/** @type {import('tailwindcss').Config} */

const spacing = {
  4: "0.4rem",
  8: "0.8rem",
  12: "1.2rem",
  16: "1.6rem",
  20: "2rem",
  24: "2.4rem",
  28: "2.8rem",
  48: "4.8rem",
  "50%": "50%",};

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      // Black
      black: "#000",

      // Orange
      orange100: "#ffbe76",
      orange200: "#f0932b",

      // Transparent
      transparent: "transparent",

      // White
      white: "#FFFFFF"
    },
    fontSize: {
      24: "24px"
    },
    spacing
  },
  plugins: [],
}
