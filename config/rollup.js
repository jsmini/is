var pkg = require('../package.json');

// 兼容 is 和 @jsmini/is 
var name = pkg.name.replace('@', '').replace(/\//g, '_');
var version = pkg.version;

var banner = 
`/*!
 * is ${version} (https://github.com/jsmini/is)
 * API https://github.com/jsmini/is/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} yanhaijing. All Rights Reserved
 * Licensed under MIT (https://github.com/jsmini/is/blob/master/LICENSE)
 */
`;

exports.name = name;
exports.banner = banner;
