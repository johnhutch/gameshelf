import path from 'path';

module.exports = {

  entry: "./src/js/app.jsx",
  
  output: {
  
    path: path.resolve(__dirname, "public/"),
  
    filename: "app.js",
  
  },

  module: {

    rules: [

      {
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, "node_modules/")
        ],

        use: [
          { loader: "react-hot-loader" },
          { loader: "babel-loader" },
        ]
      },

      {
        test: "\.css$",

        use: [ 
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: "\.useable\.css$",

        use: [
          { 
            loader: "style-loader",
            options: {
              useable: true
            }
          },
          { 
            loader: "css-loader" 
          }
        ]
      }
    ]
  },

  devServer:{
    contentBase: 'public'
  }  
}
