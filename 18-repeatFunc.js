
// 周期执行某个函数 n 次
function repeat(func, times, ms, immediate) {
    let count = 0;
    const ctx = null;

    function inner(...args) {
        count++;
        if (count === 1 && immediate) {
            inner.call(ctx, ...args);
            func.call(ctx, ...args);
            return;
        }

        if (count > times) {
            return;
        }

        return setTimeout(() => {
            func.call(ctx, ...args);
            inner.call(ctx, ...args);
        }, ms)
    }

    return inner;
}

// test
const repeatFunc = repeat(console.log, 4, 2000, false);
repeatFunc('hello world');