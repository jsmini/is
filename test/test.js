var expect = require('expect.js');

var is = require('../src/index.js');

describe('单元测试', function() {
    this.timeout(1000);

    describe('功能', function() {
        it('相等', function() {
            expect(is.isBoolean(true)).to.equal(true);
            expect(is.isString('')).to.equal(true);
            expect(is.isNull(null)).to.equal(true);
            expect(is.isUndefined()).to.equal(true);

            expect(is.isObject({})).to.equal(true);
            expect(is.isObject(Object.create(null))).to.equal(true);
            expect(is.isObject(Object.create({}))).to.equal(true);
            
            expect(is.isArray([])).to.equal(true);
            expect(is.isFunction(function () {})).to.equal(true);
        });

        it('isInRange', function() {
            expect(is.isInRange(1)).to.equal(true);
            expect(is.isInRange('abc')).to.equal(false);

            expect(is.isInRange(1, 1)).to.equal(true);
            expect(is.isInRange(1, 2)).to.equal(false);

            expect(is.isInRange(1, undefined, 1)).to.equal(true);
            expect(is.isInRange(1, 0, 2)).to.equal(true);
            expect(is.isInRange(1, 0, 0)).to.equal(false);
        });

        it('isNumber', function() {
            expect(is.isNumber(1)).to.equal(true);
            expect(is.isNumber(1.1)).to.equal(true);
            expect(is.isNumber(1, 0, 10)).to.equal(true);
            expect(is.isNumber(1, 1, 1)).to.equal(true);
            expect(is.isNumber(1, 2)).to.equal(false);
            expect(is.isNumber(1, -1, 0)).to.equal(false);
        });
        
        it('isInteger', function() {
            expect(is.isInteger(1)).to.equal(true);
            expect(is.isInteger(1.1)).to.equal(false);
            expect(is.isInteger(1, 0, 10)).to.equal(true);
            expect(is.isInteger(1, 1, 1)).to.equal(true);
            expect(is.isInteger(1, 2)).to.equal(false);
            expect(is.isInteger(1, -1, 0)).to.equal(false);
        });

        it('isInt', function() {
            expect(is.isInt(1)).to.equal(true);
            expect(is.isInt(-2147483648)).to.equal(true);
            expect(is.isInt(-2147483649)).to.equal(false);
            expect(is.isInt(2147483647)).to.equal(true);
            expect(is.isInt(2147483648)).to.equal(false);
        });

        it('isEmptyString', function() {
            expect(is.isEmptyString(123)).to.equal(false);
            expect(is.isEmptyString('')).to.equal(true);
            expect(is.isEmptyString(' ')).to.equal(true);
            expect(is.isEmptyString('   ')).to.equal(true);
            expect(
                is.isEmptyString(`
            `)
            ).to.equal(true);
            expect(is.isEmptyString(' a ')).to.equal(false);
        });
    });
});
