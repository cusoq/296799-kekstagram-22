const path = require('path');
const CopyWebpackPlugin = require(`copy-webpack-plugin`);

module.exports = {
  entry: './source/js/main.js',
  devtool: 'source-map',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
    },
    ],
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
      {
        from: './source/fonts/',
        to: './fonts'
      },
      {
        from: './source/favicon.ico',
        to: './favicon.ico'
      },
      {
        from: './source/img/',
        to: './img'
      },
      {
        from: './source/photos/',
        to: './photos'
      },
      {
        from: './source/css/',
        to: './css'
      },
      {
        from: './source/index.html',
        to: './index.html'
      }
    ],
  }),
  ]
};
