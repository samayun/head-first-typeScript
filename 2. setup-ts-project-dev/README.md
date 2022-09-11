## Steps to setup typescript for development

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
