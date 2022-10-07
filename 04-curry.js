
// 函数柯里化
function curry(fn) {
    const that = this;
    function inner(...args) {
        if (args.length >= fn.length) return fn.call(that, ...args);
        return (...nextArgs) => {
            return inner.call(that, ...args, ...nextArgs);
        };
    }
    return inner;
}

// 带有占位符的柯里化
function curryPlaceholder(fn) {
    function inner(...args) {
        let complete = 
            args.length >= fn.length && 
            !args.slice(0, fn.length).includes(curryPlaceholder.placeholder);
        if (complete) return fn.apply(this, args);
        return (...nextArgs) => {
            const res = args.map(arg => {
                let newArg = 
                    arg === curryPlaceholder.placeholder ?
                    nextArgs.shift() || curryPlaceholder.placeholder : arg
                return newArg;
            });
            return inner(...res, ...nextArgs);
        }
    }
    return inner;
}

// test
const fn = function (a, b, c) {
    console.log(a + b + c);
}

const Fn = curry(fn);
Fn(1)(2)(3)

const Fn1 = curryPlaceholder(fn);
curryPlaceholder.placeholder = '_';
Fn1(1, '_', 2, '_')(2, '_')
