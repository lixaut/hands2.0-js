
// 字符串反转
function reverseString(str) {
    if (str.length === 1) return str;
    return reverseString(str.slice(1)) + str[0];
}

// test
console.log(reverseString('abcd'));