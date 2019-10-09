# [is](https://github.com/jsmini/is)
[![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/yanhaijing/jslib-base)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jsmini/is/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/jsmini/is.svg?branch=master)](https://travis-ci.org/jsmini/is)
[![Coveralls](https://img.shields.io/coveralls/jsmini/is.svg)](https://coveralls.io/github/jsmini/is)
[![npm](https://img.shields.io/badge/npm-0.8.5-orange.svg)](https://www.npmjs.com/package/@jsmini/is)
[![NPM downloads](http://img.shields.io/npm/dm/@jsmini/is.svg?style=flat-square)](http://www.npmtrends.com/@jsmini/is)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/jsmini/is.svg)](http://isitmaintained.com/project/jsmini/is "Percentage of issues still open")

js判断函数，解决80%类型判断问题，原生兼容IE6 

Type checking function. fixed 80% of type checking problem

English | [简体中文](./README-zh_CN.md)

## Environment Support

unit test ensure it supports the following environments.

| IE/Edge | Chrome | Firefox | Safari | Opera | IOS  | Android | Node  |
| ------- | ------ | ------- | ------ | ----- | ---- | ------- | ----- |
| 6+      | 23+    | 4+      | 6+     | 10+   | 5+   | 2.3+    | 0.10+ |

## Directory

```
.
├── demo
├── dist  # production code
├── doc   # document
├── src   # source code
├── test  # unit test
├── CHANGELOG.md
└── TODO.md
```

## Usage
npm installation

```bash
$ npm install --save @jsmini/is
```

Node.js

```js
var isNumber = require('@jsmini/is').isNumber;

isNumber(1) // true
```

webpack

```js
import { isNumber } from '@jsmini/is';

isNumber(1) // true
```

Require.js

```js
requirejs(['node_modules/@jsmini/is/dist/index.aio.js'], function (jsmini_is) {
    var isNumber = jsmini_is.isNumber;

    isNumber(1) // true
})
```

Browser

```html
<script src="node_modules/@jsmini/is/dist/index.aio.js"></script>

<script>
    var isNumber = jsmini_is.isNumber;
    
    isNumber(1) // true
</script>
```

## Document

- [API](https://github.com/jsmini/is/blob/master/doc/api.md)

## Contributing Guide  ![PRs welcome](<https://img.shields.io/badge/PRs-welcome-brightgreen.svg>)
when initialize, install dependencies 

```bash
$ npm install
```

builds your code for production to `build` folder

```bash
$ npm run build
```

run unit test.  notice: borwser enviroment need to test manually.  test file is in `test/browser`

```bash
$ npm test
```

change  the  version in package.json and README.md, add your description in CHANGELOG.md, and then release it happily.

```bash
$ npm run release
```

publish the new package to npm

```bash
$ npm publish --access=public
```

  Maybe you should change relative information in the follow files

- README.md
- package.json
- config/rollup.js
- test/browser/index.html

```bash
$ npm run rename # rename command
```

## Contributors

[contributors](<https://github.com/jsmini/is/graphs/contributors>)

## CHANGELOG
[CHANGELOG.md](https://github.com/jsmini/is/blob/master/CHANGELOG.md)

## TODO
[TODO.md](https://github.com/jsmini/is/blob/master/TODO.md)

## who is using
