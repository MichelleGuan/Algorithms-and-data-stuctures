// 1. why foreach can't break and can't get return value and how to solve this problem
var arr = [1, 2, 3, 4, 5];
Array.prototype.myForEach = function(fn) {
  var len = this.length;
  for (var i = 0; i < len; i++) {
    fn(this[i], i);
  }
};
const arrReturn = arr.myForEach(function(ele) {
  if (ele === 2) {
    return true;
  }
});
//undefined
//console.log(arrReturn);
Array.prototype.myForEach2 = function() {
  var len = this.length;
  for (var i = 0; i < len; i++) {
    var _this = this;
    (function(i) {
      if (arr[i] === 2) {
        //嵌套函数的return不能作为外层函数的返回值，如果是使用yeild会导致语法错误
        return true;
      }
    })(i);
  }
};
arr.myForEach2();

const isTwoPresent = [0, 1, 2, 3, 4].some(val => val > 2);
//true
console.log(isTwoPresent);

const isTwoPresent2 = [0, 1, 2, 3, 4].every(val => val > 2);
//false
console.log(isTwoPresent2);

//2. What is the Iterator and Generator

//所有可以迭代的对象都有一个next（）方法,调用这个接口实现迭代的就是迭代器
function createIterator(items) {
  var i = 0;
  return {
    next: function() {
      var done = i >= items.length;
      var value = !done ? items[i++] : undefined;
      return {
        done: done,
        value: value
      };
    }
  };
}
var iterator = createIterator([1, 2, 3]);
//{ done: false, value: 1 }
//{ done: false, value: 2 }
//{ done: false, value: 3 }
//{ done: true, value: undefined }
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//生成器就是返回迭代器的函数，yeild和return一样会返回值，每次执行完一个yield语句就会暂停，等待下一次调用next()
function* createIterator3() {
  for (let i = 0; i < items.length; i++) {
    yield items[i];
  }
}
var iterator3 = createIterator3([1, 2, 3]);
//yield* 用于迭代器的联用，可以取自己迭代器生成的值
function* func1() {
  yield 42;
}
function* func2() {
  yield* func1();
}

//数组字符串之类的对象都有默认的迭代器，所以可以调用for-of
let ArrayIterator = [3, 4, 5];
let iteratorArray = ArrayIterator[Symbol.iterator]();

//数组 Map Set有三种迭代器
data = new Map();
data.set("a", "b");
for (let entry of data.entries()) {
  //[ 'a', 'b' ]
  console.log(entry);
}
for (let value of data.values()) {
  //b
  console.log(value);
}
for (let key of data.keys()) {
  //a
  console.log(key);
}

//3. How can we use Iterator and Generator
//最经典的就是asynic和await的实现
async function init() {
  const res1 = await doTask1();
  const res2 = await doTask2(res1);
  const res3 = await doTask3(res2);
  return res3;
}
function runner(iterator) {
  const iteratorRun = iterator();
  function run(arg) {
    let result = iteratorRun.next(arg);
    if (result.done) {
      return result.value;
    } else {
      return Promise.resolve(result.value).then(run);
    }
  }
  return run();
}
runner(function*() {
  //这三个doTask放什么异步方法都可以，有返回值就可以
  const res1 = yield doTask1();
  const res2 = yield doTask2(res1);
  const res3 = yield doTask3(res2);
  return res3;
});

//4.Differences between foreach/map/for-of/for-in
//foreach只能遍历数组，对数组每个值调用回调函数，一般用于数组取值.map和foreach类似，但是会返回一个新的数组，foreach返回的是undefined,比如你需要联和filter/reduce使用的时候就必须使用map，使用foreach会返回undefined导致报错

arr.forEach((num, index) => {
  return (arr[index] = num * 2);
});
let doubled = arr.map(num => {
  return num * 2;
});
let arrMap = [1, 2, 3, 4, 5];
let arr2 = arrMap
  .map(num => num * 2)
  .filter(num => num > 5)
  .reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(arr2);
// [6, 8, 10] = 24

//for-in和for-of表层的区别是，for-in遍历的是key，for-of遍历的是value。深层看的话，for-in只能遍历[Enumerbale]=true的对象，主要用于遍历Object。for-of则可以遍历所有有[Symbol.iterator]接口的,不能遍历Object，可以用于数组和String类型的遍历。
const string = "Ire Aderinokun";
for (const index in string) {
  //console.log(string[index])
}
// Result: I, r, e, , A, d, e, r, i, n, o, k, u, n
const array = ["a", "b", "c", "d"];
for (const item of array) {
  //console.log(item)
}
// Result: a, b, c, d
const array2 = ["a", "b", "c", "d"];
const iterator2 = array2[Symbol.iterator]();
console.log(iterator2.next().value);
console.log(iterator2.next().value);
console.log(iterator2.next().value);
console.log(iterator2.next().value);
// Result: a, b, c, d

//5.Why we have to use constructor and super() when write classes in React extend React.Component
//这是个最简单的通过构造函数和原型模拟类的实现
function PersonType(name) {
  this.name = name;
}
PersonType.prototype.sayName = function() {
  console.log(this.name);
};
var person = new PersonType("Christian");
person.sayName();
//封装过后会发现，构造函数可以和前面标签的名字不一致，真正创建了这个类的是构造函数，因此继承的时候，super()的this绑定也是指向这个构造函数，在原型上写的方法都相当于给这个构造函数添加属性，通过原型上的键调用对应的函数
let PersonClass = (function() {
  "use strict";
  const PersonType2 = function(name) {
    if (typeof new.target === "undefined") {
      throw new Error("Please use keyword new");
    }
    this.name = name;
  };
  Object.defineProperties(PersonType2.prototype, {
    sayName: {
      value: function() {
        console.log(this.name);
      },
      enumerable: false,
      writable: true,
      configurable: true
    },
    html: {
      enumerable: false,
      configurable: true,
      get: function() {
        return this.element.innerHTML;
      },
      set: function(value) {
        this.element.innerHTML = value;
      }
    }
  });
  return PersonType2;
})();
var person2 = new PersonClass("Angelo");
person2.sayName();
//上述ES5写法在ES6是这样的,class本质上还是函数，继承的时候，extends相当于创建了一个基类的新对象重写了子对象的原型，super类似于call通过初始化this使子类能够访问到基类的构造函数，进而使用基类的方法，完成继承
let PersonClass3 = class PersonType2 {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
  get html() {
    return this.element.innerHTML;
  }
  set html(val) {
    this.element.innerHTML = val;
  }
};
//这是一个ES5实现继承的实例
//基类Rectangle
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}
Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};
//子类Square
function Square(length) {
  //等价于super()
  Rectangle.call(this, length, length);
}
//等价于extends
Square.prototype = Object.create(Rectangle.prototype, {
  Constructor: {
    value: Square,
    enumerable: true,
    writable: true,
    configurable: true
  }
});
var Square = new Square(3);
console.log(Square.getArea());

//6. Static Method and Symbol.species in Class
//静态方法可以在没有实例化的时候调用，写create还有clone之类的方法很有用，可以把一些项目通用的方法写成静态方法使用，需要注意的是实例化之后不能再使用静态成员，静态函数也不能做构造函数
class PersonStatic {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
  static create(name) {
    return new PersonStatic(name);
  }
}
let Eileen = PersonStatic.create("Eileen");
//每个类型都有一个默认的Symbol.species，总是默认返回构造函数，可以手动指定返回方法应该从哪个类获取
class MyArray extends Array {
  static get [Symbol.species]() {
    //默认为 return this
    return Array;
  }
}
let items = new MyArray(1, 2, 3, 4),
  subitems = items.slice(1, 3);
//MyArray [ 1, 2, 3, 4 ] MyArray [ 2, 3 ]
//MyArray [ 1, 2, 3, 4 ] [ 2, 3 ]
console.log(items, subitems);

//7. A brief introduction to Proxies and Reflection
//Reflect.defineProperty(target, propertyKey, attributes)
const object1 = {};
if (Reflect.defineProperty(object1, "property1", { value: 42 })) {
  console.log("property1 created!");
} else {
  console.log("problem creating property1");
}
console.log(object1.property1);
//"property1 created!"
// 42

//var p = new Proxy(target, handler);
var handler = {
  get: function(obj, prop) {
    return prop in obj ? obj[prop] : 37;
  }
};
var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;
console.log(p.a, p.b); // 1, undefined
console.log("c" in p, p.c); // false, 37

//在React开发中，前端部署了nodejs服务器
var proxy = require("http-proxy-middleware");
//context可以是单个字符串，也可以是多个字符串数组，星号（*）表示匹配当前路径下面的所有api
const context = [`/login`, `/admin/*`];
//options通常只需要配置target，也就是你的api所属的域名。
const options = {
  target: "http://www.xxx.com",
  changeOrigin: true
};
//将options对象用proxy封装起来，作为参数传递
const apiProxy = proxy(options);
app.use(context, apiProxy);

//在React开发中，用webpack的devServer来启动前端项目
var proxy = require("http-proxy-middleware");
const context = [`/login`, `/admin/*`];
module.exports = {
  devServer: {
    host: "localhost",
    port: "3011",
    proxy: [
      {
        context: context,
        target: "https://www.xxx.com",
        secure: false
      }
    ]
  }
};

var obj = new Proxy(
  {},
  {
    get: function(target, key, receiver) {
      console.log(`getting ${key}!`);
      return Reflect.get(target, key, receiver);
    },
    set: function(target, key, value, receiver) {
      console.log(`setting ${key}!`);
      return Reflect.set(target, key, value, receiver);
    }
  }
);
obj.count = 1;
//  setting count!
++obj.count;
//  getting count!
//  setting count!
//  2
