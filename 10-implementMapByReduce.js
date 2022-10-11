
// 用 reduce 实现 map
function implementMapByReduce(list, func) {
    return list.reduce((acc, cur, i) => {
        acc[i] = func(cur);
        return acc;
    }, []);
}

// test
const a = implementMapByReduce([1, 2, 3, 4], a => a + 1); // [2,3,4,5]
console.log(a);

const b = implementMapByReduce(["a", "b", "c"], a => a + "!"); // ['a!', 'b!', 'c!']
console.log(b);
