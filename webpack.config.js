const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/src/app.js",
  output: {
    path: path.join(__dirname, './frontend/public'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
     { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', `react`]
        }
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file'
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};
