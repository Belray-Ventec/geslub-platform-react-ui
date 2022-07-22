const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
module.exports = {
  rollup(config) {
    true,
      config.plugins.push(
        postcss({
          plugins: [
            autoprefixer(),
            cssnano({
              preset: 'default',
            }),
          ],
          inject: true,
          // only write out CSS for the first bundle (avoids pointless extra files):
          extract: false,
        })
      );
    return config;
  },
};
