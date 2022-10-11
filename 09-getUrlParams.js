
// 给定 key，求解 href 中的 value，如果有多个，返回数据，如果没有返回 null
function getUrlParams(key, href) {
    const query = href.split('?');
    if (query.length <= 1) return null;
    const pairs = query[1].split('&');
    const res = pairs
        .filter((pair) => {
            const [k] = pair.split('=');
            if (k === key) return true;
            return false;
        })
        .map((pair) => {
            const [k, value] = pair.split('=');
            return value;
        });
    if (res.length === 0) return null;
    if (res.length === 1) return res[0];
    return res;
}

// test
const a = getUrlParams('a', 'http://lucifer.ren?a=1&b=2&a=3');
const b = getUrlParams('b', 'http://lucifer.ren?a=1&b=2&a=3');
const c = getUrlParams('c', 'http://lucifer.ren?a=1&b=2&a=3');

console.log(a);
console.log(b);
console.log(c);