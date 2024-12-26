## intall dev dependencions

```shell
npm install mocha chai --save-dev
```

## edit package.json

- add type module

- edit script test

```json
{
  "name": "3_phoneprojectmocha",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "mocha"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "chai": "^5.1.1",
    "mocha": "^10.7.3"
  }
}
```