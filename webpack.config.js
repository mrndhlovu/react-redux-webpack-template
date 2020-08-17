const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/assets/static-assets/index.html",
    }),
  ],
  devServer: {
    historyApiFallback: true,
    port: 3000,
  },
  externals: {
    config: JSON.stringify({
      apiUrl: "http://localhost:5000",
    }),
  },
};
