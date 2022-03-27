const path = require('path');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? false : 'source-map',
  entry: {
    main: './js/main.js',
    vendor: './js/vendor.js',
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'build/js'),
  },
  optimization: {
    minimize: isProd,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(swiper|dom7)\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: false,
            rootMode: 'upward',
            // presets: [
            //   '@babel/preset-env'
            // ]
          }
        }
      }
    ]
  }
};
