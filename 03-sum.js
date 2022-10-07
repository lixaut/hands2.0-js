
// 实现加法
function sum(a, b) {
    if (a === 0) return b;
    if (b === 0) return a;
    let res = a ^ b;
    let carry = (a & b) << 1;
    return sum(res, carry);
}

// test
console.log(sum(7, 8));