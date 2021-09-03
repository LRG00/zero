---
title: index
date: 2021-09-02 10:11:46
categories:
  - interview
  - error1
tags:
  - 
---

## try..catch

```javascript
// 出现错误，则 try 执行停止，控制流转向 catch
// 要使得 try..catch 能工作，代码必须是可执行的
// try..catch 同步工作
try {
  console.log('Start of try runs');
  xxxxx; // Error，变量未定义！
  console.log('End of try (never reached)');  // 不执行到这里
} catch (err) {
  // 错误捕获
  console.log(err)
  throw new Error('自定义错误') // 自定义错误
} finally {
   // 总是会执行的代码
}
```

### 全局 catch

```javascript
window.onerror = function(message, url, line, col, error) {
  // ...
};
// 或者
window.addEventListener("error", fn);
```

window.onerror默认无法捕获跨域的js运行错误。
比如说，我们的代码想引入B网站的b.js文件，怎么捕获它的异常？

**解决办法**：

（1）在`b.js`文件里，加入如下 response header，表示允许跨域：（或者世界给静态资源`b.js`加这个 response header）

``` javascript
 Access-Control-Allow-Origin: *
```

（2）引入第三方的文件`b.js`时，在`<script>`标签中增加`crossorigin`属性；

## 资源加载错误的捕获方式

上面的window.onerror只能捕获即时运行错误，无法捕获资源加载错误。
原理是：资源加载错误，并不会向上冒泡，object.onerror捕获后就会终止（不会冒泡给window），所以window.onerror并不能捕获资源加载错误。

**方式1**：object.onerror。img标签、script标签等节点都可以添加onerror事件，用来捕获资源加载的错误。

**方式2**：performance.getEntries。可以获取所有已加载资源的加载时长，通过这种方式，可以间接的拿到没有加载的资源错误。

## 错误上报的两种方式

**方式一** 采用Ajax通信的方式上报（此方式虽然可以上报错误，但是我们并不采用这种方式）

**方式二** 利用Image对象上报（推荐。网站的监控体系都是采用的这种方式）
