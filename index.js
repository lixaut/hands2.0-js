
class MyPromise {
    constructor(executor) {
      executor(this.resolve, this.reject);
      this.status = 'pending';
      this.value = null;
      this.reason = null;
    }
  
    resolve(value) {
      if (this.status === 'pending') {
        this.status = 'fulfilled';
        this.value = value;
      }
    }
  
    reject(reason) {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.reason = reason;
      }
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
  
  console.log(promise);
  // promise.then(value => {
  //     console.log('value', value)
  // }, reason => {
  //     console.log('reject', reason)
  // })
  