const path = require('path');

module.exports = {
  mode: 'production',
   entry: './client/src/index.js',
   output: {
      path: path.join(__dirname, 'client/dist'),
      filename: 'index_bundle.js'
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['@babel/preset-react']
            }
         }
      ]
   },
}