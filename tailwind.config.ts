import plugin from "tailwindcss/plugin";

const spacing = {
  0: "0rem",
  "1/2": "50%",
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
  44: "4.4rem",
  48: "4.8rem",
  56: "5.6rem",
  60: "6rem",
  72: "7.2rem",
  88: "8.8rem",
  96: "9.6rem",
  160: "16rem",
  200: "20rem",
  240: "24rem",
  320: "32rem",
  480: "48rem"
};

const tailwindConfig = {
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
        sm: "0 1px 16px #FFFFFF"
      },
      backgroundOpacity: {
        60: "0.6"
      },
      translate: {
        sm: "-0.5rem",
        md: "0"
      }
    },
    borderRadius: {
      sm: "4px",
      md: "8px",
      lg: "50%"
    },
    borderWidth: {
      1: "1px",
      thin: "thin"
    },
    boxShadow: {
      primaryButton: "0px 0px 8px -1px #150a13",
      secondaryButton: "1px 1px 8px -1px #ffffff",
      none: "none",
      pageDescription: "7px 4px 15px #b3b3b3"
    },
    colors: {
      // Black
      black: "#3F3D56",

      //Green
      green100: "#98cda0",
      green200: "#54ab61",
      green400: "#1D5C4D",

      // White
      white: "#FFFFFF",

      //Blue
      blue400: "#5D767C",

      //none
      none: "none",

      // Gray
      gray100: "#f7eef5",
      gray200: "#f2e4ef",
      gray300: "#EDE5EB",
      gray400: "#b3b3b3",
      gray500: "#fee5e5"
    },
    fontFamily: {
      barlow: ["var(--font-barlow)", "sans-serif"]
    },
    fontSize: {
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      24: "24px",
      34: "34px",
      36: "36px",
      40: "40px"
    },
    fontWeight: {
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
      screenMinMd: {
        raw: "(min-width: 1280px)"
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
      },
      print: { raw: "print" }
    },
    spacing,
    transitionDuration: { fast: "100ms", default: "300ms" },
    zIndex: {
      100: "100"
    }
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "text-shadow": (value: string) => ({
            textShadow: value
          })
        },
        { values: theme("textShadow") }
      );
    })
  ]
};

export default tailwindConfig;
