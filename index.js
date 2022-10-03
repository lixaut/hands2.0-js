
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
