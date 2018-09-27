import { type } from '@jsmini/type';

export function isNumber(x, min, max) {
    min = +min;
    max = +max;

    return type(x) === 'number'
        && (!isNaN(min) ? x >= min : true)
        && (!isNaN(max) ? x <= max : true);
}

export function isInt(x, min, max) {
    min = +min;
    max = +max;
    return parseInt(x, 10) === x
        && (!isNaN(min) ? x >= min : true)
        && (!isNaN(max) ? x <= max : true);
}

export function isBoolean(x) {
    return type(x) === 'boolean';
}

export function isString(x) {
    return type(x) === 'string';
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
