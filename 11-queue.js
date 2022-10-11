
// 用栈实现队列
function Queue(list) {
    this.stack = list || [];
    this.helperStack = [];
}

Queue.prototype.push = function (ele) {
    let res;
    while (res = this.stack.pop()) {
        this.helperStack.push(res);
    }
    this.stack.push(ele);
    while (res = this.helperStack.pop()) {
        this.stack.push(res);
    }
}

Queue.prototype.pop = function (ele) {
    return this.stack.pop();
}

// test
const q = new Queue();
q.push(1);
q.push(2);
q.push(3);
q.push(4);
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());