import { type } from '@yanhaijing/type_js';

export function isNumber(x) {
    return type(x) === 'number';
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
