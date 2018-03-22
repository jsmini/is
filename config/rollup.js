var pkg = require('../package.json');

// 兼容 is.js 和 @yanhaijing/is.js 
var name = pkg.name.split('/').pop();
var version = pkg.version;

var banner = 
`/*!
 * is.js ${version} (https://github.com/yanhaijing/is.js)
 * API https://github.com/yanhaijing/is.js/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} yanhaijing. All Rights Reserved
 * Licensed under MIT (https://github.com/yanhaijing/is.js/blob/master/LICENSE)
 */
`;

exports.name = name;
exports.banner = banner;
