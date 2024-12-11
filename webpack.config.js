const path = require("path");

module.exports = {
    entry: "./src/index.js", // Ensure this file exists and has no typos
    // Entry point of your application
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] // Loaders applied from right to left
      },
      {
        test: /\.svg$/,
        use: ['svg-loader'] // Use svg-loader directly
      }
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
     
    static: {
      directory: path.join(__dirname, 'public'), // Ensure this points to the correct public folder location
    },
    port: 3000, // Port for the development server
    open: true, // Open the default web browser when the server starts
    
    historyApiFallback: true, // Enable for Single Page Applications (SPA) to handle 404s
  },
  
};
