
// 节流
function throttle(fun, delay) {
    let flag = true;
    return function() {
        if (flag) {
            setTimeout(() => {
                fun.apply(this, arguments);
                flag = true;
            }, delay);
            flag = false;
        }
    }
}

// 防抖
function debounce(fun, delay) {
    let timer = null;
    return function() {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fun.apply(this, arguments);
        }, delay);
    };
}