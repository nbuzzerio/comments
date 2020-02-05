const path = require('path');

const source = path.join(__dirname, '/client/main.js');
const destination = path.join(__dirname, '/client/dist');

module.exports = {
  mode: 'development',
  entry: source,
  output: {
    path: destination,
    filename: 'index_bundle.js'
  },
  devServer: {
    inline: true,
    port: 8001,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react']
        },
      },
    ],
  },
}
