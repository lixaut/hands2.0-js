
// 手写 call
Function.prototype.myCall = function (ctx, ...args) {
    let fn = Symbol();
    const context = ctx ? Object(ctx) : window;
    context.fn = this;
    let res = args.length ? context.fn(...args) : context.fn();
    delete context.fn;
    return res;
};

// 手写 apply
Function.prototype.myApply = function (ctx, args = []) {
    if (!Array.isArray(args)) throw new Error('apply need Array');
    let fn = Symbol();
    const context = ctx ? Object(ctx) : window;
    context.fn = this;
    let res = args.length > 0 ? context.fn(...args) : context.fn();
    delete context.fn;
    return res;
};

// 手写 bind
Function.prototype.myBind = function (ctx, ...args) {
    let that = this;
    return function (...addArgs) {
        return that.apply(ctx, args.concat(addArgs));
    };
};

// test
const obj = {
    name: 'jack'
};

const obj2 = {
    name: 'tom',
    fn: function (age, gender) {
        console.log(`my name is ${this.name}, ${age} years old, gender ${gender}`);
    }
};

// myBind
obj2.fn.myBind(obj, 18)('man');
// myApply
obj2.fn.myApply(obj, [19, 'women']);
// myCall
obj2.fn.myCall(obj, 20, 'man');