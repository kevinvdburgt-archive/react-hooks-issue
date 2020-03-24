const { resolve } = require('path');

module.exports = {
  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  entry: resolve(__dirname, 'src', 'index.ts'),

  externals: {
    'styled-components': {
      commonjs: 'styled-components',
    },
  },

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs',
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
};
