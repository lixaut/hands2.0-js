
// 手写 call
Function.prototype.myCall = function (context) {
    if (typeof this !== 'function') {
        throw new Error('Type error')
    }
    let args = arguments.slice(1)
    let res = null
    context = context || window
    context.fn = this
    res = context.fn(...args)
    delete context.fn
    return res
}

// 手写 apply
Function.prototype.myApply = function (context) {
    if (typeof this !== 'function') {
        throw new Error('Type error')
    }
    let res = null
    context = context || window
    const fnSymbol = new Symbol
    context[fnSymbol] = this
    if (arguments[1]) {
        res = context[fnSymbol](...arguments[1])
    } else {
        res = context[fnSymbol]()
    }
    delete context[fnSymbol]
    return res
}

// 手写 bind
Function.prototype.myBind = function (context, ...args) {
    if (typeof this !== 'function') {
        throw new Error('Type error')
    }
    const fn = this
    return function (...addArgs) {
        return fn.apply(context, args.concat(addArgs))
    }
}