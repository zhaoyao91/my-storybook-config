module.exports = {
  stories: ["../src/**/*.stories.[tj]sx"],
  addons: [
    "@storybook/preset-typescript",
    "@storybook/addon-knobs/register",
    "@storybook/addon-actions/register",
    "@storybook/addon-viewport/register",
    "@storybook/addon-docs"
  ]
};
