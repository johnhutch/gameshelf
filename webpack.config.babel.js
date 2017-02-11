import path from 'path';
import webpack from 'webpack';

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: './dist/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
