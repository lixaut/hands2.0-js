
// 实现快排
function quickSort(list) {
    let len = list.length;
    if (len < 2) return list;
    let cur = list[len - 1];
    const leftList = list.filter((item, index) => item <= cur && index != len - 1);
    const rightList = list.filter((item) => item > cur);
    return [...quickSort(leftList), cur, ...quickSort(rightList)];    
}

// test
const arr = [1, 9, 4, 2, 5, 7, 3, 8, 6, 0];
console.log(quickSort(arr));