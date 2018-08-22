// webpack v4
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: { main: "./src/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/assets",
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: 'url-loader'
        }
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: "style.css" }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: "./index.html",
      filename: "index.html"
    })
  ]
};;