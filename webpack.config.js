/*
  The purpose of this file is a secondary build step, which compiles all styles
  into a single css file, which can be passed to the production system.
*/

const sassGlobImporter = require('node-sass-glob-importer');
const path = require('path');

module.exports = {
  mode: 'development',

  entry: ['./src/style.scss'],

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'out.js'
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css'
            }
          },

          {
            loader: 'postcss-loader'
          },

          {
            loader: 'sass-loader',
            options: {
              importer: sassGlobImporter(),
              outputStyle: 'expanded'
            }
          }

          // autoprefixer
        ]
      }
    ]
  }
};
