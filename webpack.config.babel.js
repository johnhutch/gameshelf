import path from 'path';

module.exports = {

  entry: './src/js/app.jsx',

  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public/')
  },

  devServer:{
    contentBase: 'public'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: ['react-hot-loader', 'babel-loader'],
      },
      {
        test: /\.css$/,
        use: [ 
          //{ loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.useable\.css$/,
        use: [
          { 
            loader: "style-loader",
            options: {
              useable: true
            },
          },
          { loader: "css-loader" },
        ],
      },
    ],
  }
};
