
// 大数相加
function bigNumberSum(a, b) {
    let cur = 0;
    while (cur < a.length || cur < b.length) {
        if (!a[cur]) {
            a = '0' + a;
        } else if (!b[cur]) {
            b = '0' + b;
        }
        cur++;
    }
    let curried = 0;
    const res = [];
    for (let i = a.length - 1; i > -1; i--) {
        let sum = curried + +a[i] + +b[i];
        if (sum > 9) {
            curried = 1;
        } else {
            curried = 0;
        }
        res[i] = sum % 10;
    }
    return res.join('');
}

let res = bigNumberSum('123444', '323562643')
console.log(res);