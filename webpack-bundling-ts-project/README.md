# Head first TypeScript

# Setup TypeScript Project using webpack

```js
const path = require('path');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
    plugins: [new TsConfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
}

```
