# 变更日志

## 0.8.5 / 2019-10-10

- fix: 修复丢失d.ts的问题

## 0.8.2 / 2019-3-20

- fix: fix ts bug

## 0.8.1 / 2019-3-4

- fix: 修复依赖不自动更新的问题

## 0.8.0 / 2019-3-2

- 增加.d.ts文件，支持ts调用
- `isEmptyString` 方法使用 `RegExp.prototype.test` 替换 `replace`

## 0.7.1 / 2018-10-10

- 修复 `isObject(Object.create(null))` 为`false`的错误

## 0.7.0 / 2018-9-29

- 新增 isInRange()
- 新增 isEmptyString()

## 0.6.0 / 2018-9-28

- isInt -> isInteger
- isInt改为代表整形

## 0.5.0 / 2018-9-27

- 新增 isInt()
- isNumber新增最小和最大值参数

## 0.4.0 / 2018-4-6

- 迁移项目，更改名称 

## 0.3.0 / 2018-3-32

- 去掉babel编译

## 0.2.0 / 2018-3-31

- 原生支持ie6-8 

## 0.1.0 / 2018-3-17

- 新增 isNumber()
- 新增 isBoolean()
- 新增 isString()
- 新增 isNull()
- 新增 isUndefined()
- 新增 isObject()
- 新增 isFunction()
- 新增 isArray()
