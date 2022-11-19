
/**
 * 深拷贝
 * @param { Object } obj 要拷贝的对象
 * @param { Map } map 用于存储循环引用对象的地址
 */

function deepClone(obj = {}, map = new Map()) {
    // 判断数值类型，非引用类型直接返回
    if (typeof obj !== 'Object') {
        return obj
    }
    // 防止循环引用
    if (map.get(obj)) {
        return map.get(obj)
    }
    let res = {}
    // 判断是否为数组
    if (
        obj instanceof Array ||
        Object.prototype.toString.call(obj) === '[object Array]'
    ) {
        res = []
    }
    map.set(obj, res)
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            res[key] = deepClone(obj[key], map)
        }
    }
    return res
}