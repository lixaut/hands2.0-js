
// 找出无序数组中和为给定值的所有组合
function sum(list) {
    return list.reduce((acc, cur) => acc + cur, 0);
}

function backTrack(list, res, templist, T, start) {
    if (sum(templist) === T) return res.push([...templist]);
    for (let i = start; i < list.length - 1; i++) {
        templist.push(list[i]);
        backTrack(list, res, templist, T, i + 1);
        templist.pop();
    }
}

function nSum(list, T) {
    let res = [];
    backTrack(list, res, [], T, 0);
    return res;
}

// test
const r = nSum([1, 3, 6, 4, 2, 7], 7);
console.log(r);