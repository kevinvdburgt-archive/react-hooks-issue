const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  entry: resolve(__dirname, 'src', 'index.tsx'),

  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
    },
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
  ],

  devServer: {
    historyApiFallback: true,
  },
};
