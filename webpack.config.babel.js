import path from 'path';

module.exports = {

  entry: "./src/js/app.jsx",
    output: {
      path: path.resolve(__dirname, "public/"),
      filename: "app.js",
    },

    resolve: {
      alias: {Styles: path.resolve(__dirname, "src/css/")
      }
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: [
            path.resolve(__dirname, "node_modules/")
          ],
          use: [
            "react-hot-loader", 
            "babel-loader"
          ]  // close use
        },  // close test .jsx

        {
          test: /\.css$/,
          use: [ 
            "style-loader",
            "css-loader"
          ]  // close use
        },  // close test .css

        {
          test: /\.useable\.css$/,  // not sure about the relevance of this tag anymore -sb
          use: [
            { 
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
                useable: true
              } 
            }     // close css-loader
          ]     // close use (line ~38)  
        },    // close test useable.css (line ~36)
      ]     // close rules (line ~16)
    },    // close module (line ~15) 

    devServer: {
      contentBase: 'public'
    },  

} // close module.exports (line ~3) 
