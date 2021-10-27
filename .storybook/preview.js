import "../styles/globals.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: "#f6f7f7",
      },
      {
        name: "dark",
        value: "#272b2b",
      },
    ],
  },
};
