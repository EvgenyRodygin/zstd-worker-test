const path = require("path");
const ThreadsPlugin = require('threads-plugin');

module.exports = {

  target: "node",

  mode: "development",

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },

  entry: "./index.js",

  plugins: [
    new ThreadsPlugin(),
  ],

  externals: { "tiny-worker": "tiny-worker" },

  output: {
    path: path.resolve("build"),
  }

}
