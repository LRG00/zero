---
title: index
date: 2021-09-02 11:01:20
permalink: /pages/7d449f/
categories:
  - interview
  - es6
tags:
  - 
---
<!-- # es6 -->

## let const var 区别

let const var 区别

1. var 存在变量提升, let&const 由于存在暂时性死区, 无法在声明前使用变量
2. let，const 都用严格的作用域，也就是说有块级作用域
3. 不允许重复声明变量
4. var 在全局作用域下声明变量会被挂在到 window 上

let const 区别

1. let 声明变量是可以修改，const 不可以修改，但是 const 声明的是一个引用类型的话，只是不能修改他的引用地址，这个引用类型的值是可以修改的
2. const 声明要赋值，let 声明可以不赋值

## 箭头函数与普通函数的区别

1. 箭头函数没有`arguments`对象,可以用...rest 参数获取实参
2. 箭头函数不能当做构造函数
3. 箭头函数`this`指向问题
4. 不能使用 call,apply,bind 方法

## es6 你常用的特性

1. 变量的解构赋值
2. 数组方法
3. class
4. module
5. promise
6. async,await
7. 箭头函数
8. 模板字符串
9. 扩展运算符
10. 新增symbol类型 表示独一无二的值，用来定义独一无二的对象属性名

## set,map,WeakSet,WeakMap

**Map 是一个带键的数据项的集合，就像一个 Object 一样。 但是它们最大的差别是 Map 允许任何类型的键（key）。**

- 方法：map.set(key, value)；map.get(key)；map.has(key)；map.delete(key)；map.clear()；map.size
- Map 迭代: map.keys() map.values() map.entries()for..of 在默认情况下使用的就是这个

**Set 是一个特殊的类型集合 —— “值的集合”（没有键），它的每一个值只能出现一次。**

- 方法：map.add(value)；map.has(value)；map.delete(value)；map.clear()；map.size
- Map 迭代: 和Map一样

**WeakMap: WeakMap 和 Map 的第一个不同点就是，WeakMap 的键必须是对象。**

- 方法：weakMap.set(key, value)；weakMap.get(key)；weakMap.has(key)；weakMap.delete(key)
- WeakMap 不支持迭代以及 keys()，values() 和 entries() 方法。所以没有办法获取 WeakMap 的所有键或值。
- WeakSet存放的对象不会计入到对象的引用技术, 因此不会影响GC的回收

**WeakSet: 与 Set 类似，但是我们只能向 WeakSet 添加对象（而不能是原始值）。**

- 方法：map.add(value)；map.has(value)；map.delete(value)
- Map 迭代: 不支持迭代
- WeakMap键名指向对象不会计入对象的引用数, 因此不会影响GC的回收
