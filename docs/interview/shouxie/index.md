# 手写代码

## 01 防抖

```javascript
// 基础版
function debounce(func, wait) {
  var timer = null;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, wait);
  };
}
```

```javascript
// 完整版
function debounce1(func, wait, option = { leading: false, trailing: true }) {
  let timer = null;
  return function(...args) {
    let isInvoked = false;
    if (timer === null && option.leading) {
      func.call(this, ...args);
      isInvoked = true;
    }
    // 计时器需要重置
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      if (option.trailing && !isInvoked) {
        func.call(this, ...args);
      }
      timer = null;
    }, wait);
  };
}
```

## 02 节流

```javascript
// 方式一： 时间差
function throttle(func, wait) {
  var previous = 0;
  return function(...args) {
    var now = +new Date();
    console.log(now - previous, "222");
    if (now - previous > wait) {
      func.apply(this, args);
      previous = now;
    }
  };
}
// 方式二： 定时器
function throttle2(func, wait) {
  var args, timeout;
  return function() {
    args = arguments;
    if (!timeout) {
      timeout = setTimeout(() => {
        func.apply(this, args);
        timeout = null;
      }, wait);
    }
  };
}
```

## 03 深拷贝（递归的方式实现）

```javascript
// 基础版（不考虑到循环引用和symbol）
function deepCopy(obj, hash = new WeakMap()) {
  if (typeof obj !== "object" || obj === null) return obj;
  var newObj = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    const element = obj[key];
    if (typeof element === "object" || element !== null) {
      newObj[key] = deepCopy(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
```

```javascript
// 完整版（考虑到循环引用和symbol）
function deepCopy(obj, hash = new WeakMap()) {
  if (typeof obj !== "object" || obj === null) return obj;

  if (hash.has(obj)) return hash.get(obj);
  var newObj = Array.isArray(obj) ? [] : {};
  hash.set(obj, newObj);
  var symbolKeys = Object.getOwnPropertySymbols(obj);
  symbolKeys.forEach((element) => {
    if (typeof obj[element] === "object" && obj[element] !== null) {
      newObj[element] = deepCopy(obj[element]);
    } else {
      newObj[element] = obj[element];
    }
  });
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      newObj[key] = deepCopy(obj[key], hash);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
```

## 04 数组去重

思路：声明一个新数组，遍历可能重复的数组，判断如果新数组中存在该元素，有就跳过，没有往新数组添加

```javascript
// 方式1：new Set
function uniqueArr(arr) {
  return [...new Set(arr)];
}
```

```javascript
// 方式2：new Map
function uniqueArr(arr) {
  const map = new Map();
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true);
      res.push(arr[i]);
    }
  }
  return res;
}
```

```javascript
// 方式3：es6中数组的方法（filter,include）
function uniqueArr(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) res.push(arr[i]);
  }
  return res;
}
```

```javascript
// 方式4: indexOf
function uniqueArr(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) === -1) res.push(arr[i]);
  }
  return res;
}
```

## 04 ajax

注意点：兼容 ie 的话加上 new ActiveXObject('Mscrosoft.XMLHttp')

```javascript
// 方式1：new Set
const fetch = function(url, method = "get") {
  return new Promise(function(resolve, reject) {
    const xhr = window.XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Mscrosoft.XMLHttp");
    xhr.open(method, url);
    xhr.send();
    xhr.onreadystatechange = function() {
      if ((xhr.readyState === 4 && xhr.status === 200) || xhr.status === 304) {
        resolve(xhr.responseText);
      } else {
        reject(new Error(xhr.responseText));
      }
    };
  });
};
```

:tada: :100:
