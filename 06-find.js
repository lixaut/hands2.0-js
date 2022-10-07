
// 循环有序列表查找

/*
    循环有序数组指的是数组是分段有序（递增）的(且假设只有两段)。
*/

function find(list, target) {
    let start = 0;
    let end = list.length - 1;
    while (start <= end) {
        const mid = (start + end) >> 1;
        if (list[mid] === target) return mid;
        if (list[start] <= list[mid]) {
            if (list[start] <= target && target <= list[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (list[mid] <= target && target <= list[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
}

// test
console.log(find([1, 3, 4, 5, 6, 3, 5, 6, 8, 9], 3))
