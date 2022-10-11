
// 给定一个字符串和对象，返回该对象中对应的字符串字段的值
function lensProp(lens, obj) {
    const keys = lens.split('.');
    if (keys.length < 1) return;
    return keys.reduce((acc, cur) => acc !== void 0 ? acc[cur] : acc, obj);
}

// test
const a = lensProp("a", { a: 1 }); // 1
const b = lensProp("b", { a: 1 }); // undefined
const c = lensProp("a.b", { a: { b: "c" } }); // c
const d = lensProp("a.b.c.d.e.f", { a: { b: "c" } }); // undefined

console.log(a);
console.log(b);
console.log(c);
console.log(d);