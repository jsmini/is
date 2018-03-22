var expect = require('expect.js');

var is = require('../dist/index.js');

describe('单元测试', function() {
    this.timeout(1000);

    describe('功能', function() {
        it('相等', function() {
            expect(is.isNumber(1)).to.equal(true);
            expect(is.isBoolean(true)).to.equal(true);
            expect(is.isString('')).to.equal(true);
            expect(is.isNull(null)).to.equal(true);
            expect(is.isUndefined()).to.equal(true);
            expect(is.isObject({})).to.equal(true);
            expect(is.isArray([])).to.equal(true);
            expect(is.isFunction(function () {})).to.equal(true);
        });
    });
});
