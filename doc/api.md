# 文档
一组类型判断函数，解决80%类型判断问题

## isInRange
判断指定的数字，是否在指定的范围内

- @param {number} x 要判断的参数，如果不为数字，将返回false
- @param {number} [min] 最小值，包含min，缺省则不会校验
- @param {number} [max] 最大值，包含max，缺省则不会校验
- @return {boolean} 是否包含

举个例子：

```js
isInRange(1, 0, 2) // true
isInRange(1, 1, 2) // true
isInRange(1, 2, 3) // false
```

## isNumber
判断是否为数字，参数和返回值如下：

- @param x {任意类型} required 要判断的参数
- @param min {number} 最小值
- @param max {number} 最大值
- @return {Boolean} 是否为数字类型

## isInteger
判断数字是否是整数，参数和返回值如下：

- @param x {任意类型} required 要判断的参数
- @param min {number} 最小值
- @param max {number} 最大值
- @return {Boolean} 是否为整数

## isInt
判断数字属否是int型，-2^31 ~ 2^31-1

- @param x {任意类型} required 要判断的参数
- @return {Boolean} 是否为整型

## isBoolean
判断是否为布尔类型，参数和返回值同上

## isString
判断是否为字符串类型，参数和返回值同上

## isEmptyString
判断指定参数是否是空字符串，会去掉首尾的空白字符（空格、tab、回车、换行等）

参数和返回值同上

## isNull
判断是否为null类型，参数和返回值同上

## isUndefined
判断是否为undefined类型，参数和返回值同上

## isObject
判断是否为对象类型，参数和返回值同上

## isFunction
判断是否为函数类型，参数和返回值同上

## isArray
判断是否为数组类型，参数和返回值同上
