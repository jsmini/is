import { type } from '@jsmini/type';

export function isInRange(x, min, max) {
    x = +x;
    min = +min;
    max = +max;

    // x 不是数字，则返回false
    if (isNaN(x)) return false;

    // min 或 max 不传，则认为不设置下限或上限
    return (!isNaN(min) ? x >= min : true) && (!isNaN(max) ? x <= max : true);
}

export function isNumber(x, min, max) {
    return type(x) === 'number' && isInRange(x, min, max);
}

export function isInteger(x, min, max) {
    return parseInt(x, 10) === x  && isInRange(x, min, max);
}

export function isInt(x) {
    // -2^31 ~ 2^31-1
    return isInteger(x, -2147483648, 2147483647);
}

export function isBoolean(x) {
    return type(x) === 'boolean';
}

export function isString(x) {
    return type(x) === 'string';
}

export function isEmptyString(x) {
    if (!isString(x)) return false;

    return x.replace(/(^\s*|\s*$)/g, '') === '';
}

export function isNull(x) {
    return type(x) === 'null';
}

export function isUndefined(x) {
    return type(x) === 'undefined';
}

export function isObject(x) {
    return type(x) === 'object';
}

export function isFunction(x) {
    return type(x) === 'function';
}

export const isArray = isFunction(Array.isArray) ? Array.isArray : function isArray(x) {
    return type(x) === 'array';
};
