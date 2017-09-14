const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  entry: [
    'reflect-metadata',
    './src/index.tsx',
  ],
  output: {
    filename: 'bundle.[hash].js',
    path: __dirname + '/dist',
    publicPath: '/',
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json',],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ['react-hot-loader/webpack', 'awesome-typescript-loader'],
      },
    ],
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.ejs`,
    }),
  ],
};
