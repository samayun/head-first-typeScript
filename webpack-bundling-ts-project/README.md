# Setup TypeScript Project using webpack

- BasePath setup - crazy @ import syntax

```json

// tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "module": "CommonJS",
    "rootDir": "src",
    "outDir": "dist",
    "baseUrl": "src",
    "paths": {
      "@/model/*": ["database/model/*"],
      "@/seeder/*": ["database/seeder/*"],
      "@/*": ["*"]
    },
    "moduleResolution": "node",
    "removeComments": true,
    "strict": false
  },
  "include": ["src"],
  "exclude": ["node_modules", "**/*.test.ts", "__tests__", "coverage", "dist"]


```

- webpack setup

```js
// webpack.config.js

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
};
```
