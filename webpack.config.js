const path = require('path');

module.exports = [
  {
    entry: './src/content.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: 'content.js',
      path: path.resolve(__dirname, 'dist'),
    },
  },
  {
    entry: './src/background.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: 'background.js',
      path: path.resolve(__dirname, 'dist'),
    },
  },
];
