export as namespace jsminiIs;

export function isInRange (x: number, min?: number, max?: number): boolean;
export function isNumber (x: any, min?: number, max?: number): x is number;
export function isInteger (x: any, min?: number, max?: number): x is number;
export function isInt (x: any): x is number;
export function isBoolean (x: any): x is boolean;
export function isString (x: any): x is string;
export function isEmptyString (x: any): boolean;
export function isNull (x: any): x is null;
export function isUndefined (x: any): x is undefined;
export function isObject (x: any): x is object;
export function isFunction (x: any): x is (...any) => any;
export function isArray (x: any): x is any[];
