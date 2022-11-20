
class MyPromise {
  constructor(executor) {
    this.status = 'pending';
    this.value = null;
    this.reason = null;
    executor(this.resolve, this.reject);
  }

  resolve = (value) => {
    if (this.status !== 'pending') return
    this.status = 'fulfilled';
    this.value = value;
  }

  reject = (reason) => {
    if (this.status !== 'pending') return
    this.status = 'rejected';
    this.reason = reason;
  }

  then(onFulfilled, onRejected) {
    if (this.status === 'fulfilled') {
      onFulfilled(this.value);
    } else if (this.status === 'rejected') {
      onRejected(this.reason);
    }
  }
}

const promise = new MyPromise((resolve, reject) => {
  resolve('success');
  reject('err');
});
promise.then(value => {
    console.log('value', value)
}, reason => {
    console.log('reject', reason)
})
