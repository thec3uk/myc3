const { getStoriesPaths } = require("slice-machine-ui/helpers/storybook");
module.exports = {
  stories: [...getStoriesPaths()],
  addons: [
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require("postcss"),
        },
      },
    },
    "@storybook/addon-backgrounds",
  ],
};
