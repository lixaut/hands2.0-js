
// 函数 compose
function compose(...fns) {
    return (...args) => {
        return fns.reduce((acc, cur) => cur(acc), ...args);
    };
}

// test
function a(m) {
    return m + 10;
}

function b(m) {
    return m + 20;
}

function c(m) {
    return m + 30;
}

const res = compose(a, b, c, a);
console.log(res(10));