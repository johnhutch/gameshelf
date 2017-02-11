import path from 'path';
import webpack from 'webpack';

module.exports = {
  entry: __dirname + '/src/js/app.jsx',
  output: {
    path: __dirname + '/dist/js',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  }
};
