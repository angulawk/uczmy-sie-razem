/** @type {import('tailwindcss').Config} */

const spacing = {
  0: "0",
  1: "1px",
  2: "0.2rem",
  4: "0.4rem",
  8: "0.8rem",
  10: "1rem",
  12: "1.2rem",
  14: "1.4rem",
  16: "1.6rem",
  20: "2rem",
  24: "2.4rem",
  28: "2.8rem",
  30: "3rem",
  32: "3.2rem",
  36: "3.6rem",
  40: "4rem",
  48: "4.8rem",
  "50%": "50%",
  52: "5.2rem",
  56: "5.6rem",
  64: "6.4rem",
  68: "6.8rem",
  72: "7.2rem",
  80: "8rem",
  "80%": "80%",
  88: "8.8rem",
  96: "9.6rem",
  "100%": "100%",
  "100vh": "100vh",
  248: "24.8rem",
  356: "35.6rem",
  1056: "105.6rem",
  auto: "auto",
  full: "100%",
  inherit: "inherit",
  negative8: "-0.8rem",
  negative12: "-1.2rem",
  negative16: "-1.6rem",
  "negative50%": "-50%",
  "negative100%": "-100%",
  screenLg: "1680px",
  screenMd: "1280px",
  screenSm: "640px",
  screenXl: "1920px",
  unset: "unset"
};

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
      0: "0",
      8: "8px",
      12: "12px",
      16: "16px",
      20: "20px",
      24: "24px",
      28: "28px",
      32: "32px",
      36: "36px",
      48: "48px",
      72: "72px"
    },
    spacing
  },
  plugins: [],
}
