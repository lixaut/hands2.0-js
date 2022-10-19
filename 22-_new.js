
// 伪数组转数组
// region
// function func() {
//     const arr = [].slice.call(arguments)
//     const arr1 = Array.prototype.slice.call(arguments)
//     const arr2 = Array.from(arguments)
//     const arr3 = [...arguments]
//     console.log(arr, arr instanceof Array)
//     console.log(arr1, arr1 instanceof Array)
//     console.log(arr2, arr2 instanceof Array)
//     console.log(arr3, arr3 instanceof Array)
// }
// func(1, 2, 3, 4)
// endregion

// 手写 new
function _new() {
  // const constructor = arguments[0]
  const constructor = [].shift.call(arguments);
  if (typeof constructor !== 'function') {
    throw new Error('The first argument of new must be a function');
  }
  const obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  // let res = constructor.apply(obj, [].slice.call(arguments, 1))
  let res = constructor.apply(obj, arguments);
  return res instanceof Object ? res : obj;
}

// test
function Test(name, age) {
  this.name = name;
  this.age = age;
}

Test.prototype.say = function () {
  console.log(`${this.name}今年${this.age}岁了`);
};

const a = _new(Test, '张三', 18);
a.say();
console.log(a);
