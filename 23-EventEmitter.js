
// 发布订阅模式
class EventEmitter {
    constructor() {
        this.events = {}
    }

    // 实现订阅
    on(type, callback) {
        if (!this.events[type]) {
            this.events[type] = [callback]
        } else {
            this.events[type].push(callback)
        }
    }

    // 删除订阅
    delete(type, callback) {
        if (!this.events[type]) return
        this.events[type] = this.events[type].filter(item => {
            return item !== callback
        })
    }

    // 只执行一次订阅事件
    once(type, callback) {
        function fn() {
            callback()
            this.delete(type, fn)
        }
        this.on(type, fn)
    }

    // 触发事件
    emit(type, ...args) {
        this.events[type] &&
        this.events[type].forEach(item => {
            item.apply(this, args)
        })
    }
}

// test
function eat() {
    console.log('吃早点');
}
function brush() {
    console.log('刷牙');
}
function bus() {
    console.log('坐校车');
}
function school() {
    console.log('去上学');
}
const eventList = new EventEmitter()
eventList.on('8点', brush)
eventList.on('8点', eat)
eventList.on('10点', bus)
eventList.once('10点', school)
eventList.delete('10点', bus)
eventList.emit('8点')
eventList.emit('10点')
eventList.emit('10点')