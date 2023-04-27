/** @type {import('tailwindcss').Config} */

const spacing = {
  0: "0rem",
  2: "0.2rem",
  4: "0.4rem",
  8: "0.8rem",
  9: "0.9rem",
  12: "1.2rem",
  16: "1.6rem",
  18: "1.8rem",
  20: "2rem",
  24: "2.4rem",
  28: "2.8rem",
  36: "3.6rem",
  45: "4.5rem",
  48: "4.8rem",
  60: "6rem",
  72: "7.2rem",
  96: "9.6rem",
  160: "16rem",
  200: "20rem",
  344: "34.4rem",
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "students": "url('/images/students.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      // Black
      black: "#000",

      // Orange
      orange100: "#CB784C",
      orange200: "#f0932b",

      //Green
      green400: "#1D5C4D",

      // Transparent
      transparent: "transparent",

      // White
      white: "#FFFFFF"
    },
    fontSize: {
      16: "16px",
      24: "24px",
      36: "36px"
    },
    screens: {
      screenLg: "1680px",
      screenMaxSm: {
        raw: "(max-width: 799px)"
      },
      screenMdLg: {
        raw: "(min-width: 1280px) and (max-width: 1679px)"
      },
      screenSmMd: {
        raw: "(min-width: 800px) and (max-width: 1279px)"
      }
    },
    spacing,
    zIndex: {
      100: "100"
    }
  },
  plugins: [],
};
