/*
  The purpose of this file is a secondary build step, which compiles all styles
  into a single css file, which can be passed to the production system.
*/

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const sassGlobImporter = require('node-sass-glob-importer');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',

  entry: {
    styles: ['./node_modules/leaflet/dist/leaflet.css', './src/style.scss'],

    'bundle.js': './static/javascript/init.js'
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name]'
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?url=false',
          'postcss-loader',

          {
            loader: 'sass-loader',
            options: {
              importer: sassGlobImporter(),
              outputStyle: 'expanded'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),

    new webpack.BannerPlugin({
      banner: `Build: ${new Date().toString()}`
    })
  ]
};
