// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");

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
  32: "3.2rem",
  36: "3.6rem",
  40: "4rem",
  45: "4.5rem",
  48: "4.8rem",
  60: "6rem",
  72: "7.2rem",
  88: "8.8rem",
  96: "9.6rem",
  160: "16rem",
  200: "20rem",
  240: "24rem",
  720: "72rem"
};

module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        students: "url('/images/students.png')"
      },
      textShadow: {
        sm: "0 1px 16px #000000"
      },
      backgroundOpacity: {
        60: "0.6"
      }
    },
    colors: {
      // Black
      black: "#000000",

      // Orange
      orange100: "#CB784C",

      //Green
      green400: "#1D5C4D",

      // White
      white: "#FFFFFF",

      //Blue
      blue400: "#5D767C",

      //pinkgray
      pink100: "#e8d3d3"
    },
    fontFamily: {
      barlow: ["var(--font-barlow)", "sans-serif"],
      roboto: ["var(--font-roboto)", "sans-serif"]
    },
    fontSize: {
      18: "18px",
      20: "20px",
      24: "24px",
      34: "34px",
      36: "36px"
    },
    fontWeight: {
      bold: 500,
      normal: 400,
      thin: 300
    },
    lineHeight: {
      ...spacing
    },
    letterSpacing: {
      wider: ".05em"
    },
    screens: {
      screenLg: "1680px",
      screenMaxXs: {
        raw: "(max-width: 479px)"
      },
      screenMaxSm: {
        raw: "(max-width: 799px)"
      },
      screenMaxMd: {
        raw: "(max-width: 1279px)"
      },
      screenSmXs: {
        raw: "(min-width: 480px) and (max-width: 799px)"
      },
      screenSmMd: {
        raw: "(min-width: 800px) and (max-width: 1279px)"
      },
      screenMdLg: {
        raw: "(min-width: 1280px) and (max-width: 1679px)"
      }
    },
    spacing,
    transitionDuration: { default: "300ms" },
    zIndex: {
      100: "100"
    }
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value
          })
        },
        { values: theme("textShadow") }
      );
    })
  ]
};
