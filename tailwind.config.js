module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./slices/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  mode: "jit",
  theme: {
    // Grayscale Design palette: https://grayscale.design/app?lums=92.72,85.96,73.80,58.88,39.22,25.38,15.15,11.44,5.71,2.32&palettes=%233e4545,%23f8c23d,%2300919F,%23f05356,%23202945&filters=0%7C0,0%7C0,0%7C0,0%7C0,0%7C0&names=gray,,,red,purple&labels=,,,,
    colors: {
      white: "#fff",
      grayscale: {
        50: "#f7f7f7",
        100: "#efefef",
        200: "#dfdfdf",
        300: "#cacaca",
        400: "#a8a8a8",
        500: "#8a8a8a",
        600: "#6d6d6d",
        700: "#5f5f5f",
        800: "#444444",
        900: "#2a2a2a",
      },
      gray: {
        50: "#f6f7f7",
        100: "#edefef",
        200: "#dce0e0",
        300: "#c5cbcb",
        400: "#a1aaaa",
        500: "#808d8d",
        600: "#646f6f",
        700: "#576161",
        800: "#3e4545", // brand
        900: "#272b2b",
      },
      yellow: {
        50: "#fef6e2",
        100: "#fdeec8",
        200: "#fbdc8e",
        300: "#f8c23a", // brand
        400: "#d99e08",
        500: "#b38206",
        600: "#8c6605",
        700: "#7b5904",
        800: "#584003",
        900: "#372802",
      },
      teal: {
        50: "#ddfcff",
        100: "#b8f9ff",
        200: "#64f2ff",
        300: "#00def2",
        400: "#00bacb",
        500: "#00919F", // brand
        600: "#007883",
        700: "#006973",
        800: "#004b52",
        900: "#003034",
      },
      red: {
        50: "#fef5f5",
        100: "#fdeaea",
        200: "#fbd6d7",
        300: "#f9babb",
        400: "#f5898b",
        500: "#f05356", // brand
        600: "#d81316",
        700: "#be1113",
        800: "#8a0c0e",
        900: "#590809",
      },
      purple: {
        50: "#f6f7fb",
        100: "#eceff6",
        200: "#dadfee",
        300: "#c1c9e2",
        400: "#9aa7d0",
        500: "#7688bf",
        600: "#536aaf",
        700: "#475c9a",
        800: "#33426e",
        900: "#202945", // brand
      },
    },
    extend: {
      fontFamily: {
        title: ["'Novecento Sans Wide'"],
        serif: ['"DM Serif Display"'],
        sans: [
          "Montserrat",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      boxShadow: {
        white:
          "0 1px 3px 0 rgba(255, 255, 255, 0.9), 0 1px 2px 0 rgba(255, 255, 255, 0.94)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
