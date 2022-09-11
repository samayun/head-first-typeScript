const tsConfigPaths = require('tsconfig-paths');
const path = require('path');
const tsConfig = require('../tsconfig.json');

tsConfigPaths.register({
  baseUrl: path.resolve(tsConfig.compilerOptions.outDir || ''),
  paths: tsConfig.compilerOptions.paths,
});
