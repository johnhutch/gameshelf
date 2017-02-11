import path from 'path';
import webpack from 'webpack';

module.exports = {
  entry: './src/js/main.jsx',
  output: {
    path: './dist/js',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      // test: /\.xxx$/, // may apply this only for some modules
      options: {
        eslint: {
          configFile: './.eslintrc'
        }
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /main\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },    
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  }
};



