/*
  This is used for the extra CSS build step. If removes comments and tries to
  normalize the output CSS file as much as possible.
*/

const cssnano = require('cssnano');

module.exports = {
  plugins: [
    cssnano({
      preset: [
        'default',
        {
          autoprefixer: true,
          normalizeWhitespace: false
        }
      ]
    })
  ]
};
