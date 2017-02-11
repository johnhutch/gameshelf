import path from 'path';

module.exports = {

  entry: './src/js/app.jsx',

  output: {
    path: __dirname + '/dist/js',
    filename: 'app.js',
    path: path.resolve(__dirname, 'public/')
  },

  devServer:{
    contentBase: 'public'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: ['react-hot-loader', 'babel-loader'],
      }
    ]
  }
};
