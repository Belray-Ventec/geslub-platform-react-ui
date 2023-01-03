module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  core: {
    builder: 'webpack5',
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-css-modules',
    '@chakra-ui/storybook-addon',
  ],
  features: {
    emotionAlias: false,
  },
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
    reactDocgen: false
  },
  staticDirs: ['../src/public'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    })

    return config
  },
};
