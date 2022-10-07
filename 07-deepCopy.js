
// 深拷贝
function deepCopy(o) {
    if (typeof o !== 'object') return o;
    let n;
    if (Array.isArray(o)) {
        n = new Array(o.length);
        o.forEach((arr, index) => n[index] = deepCopy(arr));
    } else if (!Array.isArray(o)) {
        n = {};
        Object.keys(o).forEach(key => n[key] = deepCopy(o[key]));
    }
    return n;
}

const obj = {
    a: {
        b: 4,
        c: {
            d: 1,
            e: 3
        }
    }
};

const obj2 = deepCopy(obj);
console.log(obj2);