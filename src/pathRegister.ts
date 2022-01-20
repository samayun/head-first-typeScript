const tsConfigPaths = require('tsconfig-paths');
const path = require('path');

tsConfigPaths.register({
  baseUrl: path.resolve('dist'),
  paths: {
    '@/model/*': ['database/model/*'],
    '@/seeder/*': ['database/seeder/*'],
    '@/*': ['*'],
  },
});
