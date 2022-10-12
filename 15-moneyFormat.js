
// 实现千分位展示
function moneyFormat(num) {
    const res = [];
    let decimalIndex = num.indexOf('.');
    let hasDecimal = decimalIndex > -1;
    for (let i = num.length - 1; i > -1; i--) {
        while (hasDecimal && decimalIndex <= i) {
            res.unshift(num[i]);
            i--;
        }
        let cur = 1;
        while (cur <= 3) {
            res.unshift(num[i]);
            i--;
            cur++;
        }
        res.unshift(',');
    }
    if (res[0] === ',') res.shift();
    return res.join('');
}

// test
const a = moneyFormat('123452452452467.55');
console.log(a);