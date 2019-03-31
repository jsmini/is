# [is](https://github.com/yanhaijing/is) [![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/yanhaijing/jslib-base) [![npm](https://img.shields.io/badge/npm-0.8.2-orange.svg)](https://www.npmjs.com/package/@jsmini/is) [![Build Status](https://travis-ci.org/jsmini/is.svg?branch=master)](https://travis-ci.org/jsmini/is) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jsmini/is/blob/master/LICENSE)

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
$ npm install --save @jsmini/clone
```

Node.js

```js
var name = require('@jsmini/clone').name;
```

webpack

```js
import { name } from '@jsmini/clone';
```

Require.js

```js
requirejs(['node_modules/@jsmini/clone/dist/index.aio.js'], function (jsmini_clone) {
    var name = jsmini_clone.name;
})
```

Browser

```html
<script src="node_modules/@jsmini/clone/dist/index.aio.js"></script>

<script>
    var name = jsmini_clone.name;
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

rename  project. you need to edit project name when initialize project or anytime you want to rename the project . you need to rename `formName` and `toname` in file `rename.js`,which will automatically rename project name in the following files

- README.md
- package.json
- config/rollup.js
- test/browser/index.html

```bash
$ npm run rename # rename command
```

## Contributors
[contributors](https://github.com/jsmini/clone/graphs/contributors)

## CHANGELOG
[CHANGELOG.md](https://github.com/jsmini/clone/blob/master/CHANGELOG.md)

## TODO
[TODO.md](https://github.com/jsmini/clone/blob/master/TODO.md)

## who is using
