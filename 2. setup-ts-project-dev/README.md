## Steps to setup typescript project for development

- setup package.json

```json

  "scripts": {
    "compile:build": "tsc -w",
    "compile:dev": "nodemon  ./dist/index.js",
    "predev": "rm -rf ./dist/",
    "dev": "concurrently npm:compile:*",
    "postinstall": "npm run dev"
  },
  "devDependencies": {
    "typescript": "*",
    "nodemon": "*",
    "concurrently": "*"
  }

```

- setup tsconfig.json .. command: `tsc --init`

```json
{
  "compilerOptions": {
    /* Language and Environment */
    "target": "es5",
    /* Modules */
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist",
    /* Type Checking */
    "strict": true
  }
}
```

write codes on src/main.ts and see outputs realtime on console terminal

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
      "@/model/*": ["database/models/*"],
      "@/seeder/*": ["database/seeder/*"],
      "@/components/*": ["ui/components/*"],
      "@/*": ["*"]
    }
  },


```

- it works on TS but not in JS. run command first: `npm i --save-dev @types/node tsconfig-paths`

```ts
// src/pathRegister.ts
const tsConfigPaths = require('tsconfig-paths');
const path = require('path');
const tsConfig = require('../tsconfig.json');

tsConfigPaths.register({
  baseUrl: path.resolve(tsConfig.compilerOptions.outDir || ''),
  paths: tsConfig.compilerOptions.paths,
});
```

- update package.json

```json
  "scripts": {
    "start": "node -r ./dist/pathRegister.js ./dist/main.js",
    "compile:build": "tsc -w",
    "compile:dev": "nodemon -r ./dist/pathRegister.js ./dist/main.js",
    "predev": "rm -rf ./dist/",
    "dev": "concurrently npm:compile:*",
    "postinstall": "npm run dev"
  },
  "devDependencies": {
    "@types/node": "^18.7.16",
    "tsconfig-paths": "*",
    "concurrently": "*",
    "nodemon": "*",
    "typescript": "*"
  },

```
