/* eslint-disable global-require */
const purgecss = require('@fullhuman/postcss-purgecss');
module.exports = {
  plugins: [
    purgecss({
      content: ['./src/**/*.js'],
    }),
    require('autoprefixer'),
  ],
};
