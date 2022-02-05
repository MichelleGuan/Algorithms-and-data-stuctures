//Queue
class Queue{
    constructor(){
      this.items = {}
      this.count = 0
      this.lowestCount = 0
    }
    enQueue(val){
      this.items[this.count] = val
      this.count++
    }
    deQueue(){
        if(this.isEmpty()){
           return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }
    isEmpty(){
        return (this.count - this.lowestCount) > 0 ? false: true
    }
    clear(){
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }
    toString(){
        if(this.isEmpty()){
            return ''
        }
        let str = `${this.lowestCount}:${this.items[this.lowestCount]}`
        for(let i = this.lowestCount+1; i< this.count; i++){
            str += `,${i}:${this.items[i]}`
        }
        return str
    }
}
// const que = new Queue()
// que.enQueue(12)
// que.enQueue(22)
// que.enQueue(32)
// console.log(que.items)

//Double-ended queue
class DeQueue{
    constructor(){
        this.count = 0
        this.lowestCount = 0
        this.item = {}
    }
    addBack(val){
        this.item[this.count] = val
        this.count ++
    }
    isEmpty(){
        return (this.count - this.lowestCount) > 0 ? false: true
    }
    addFront(val){ 
        if(this.isEmpty()){
            this.addBack(val)
        }else if(this.lowestCount>0){
            this.lowestCount--
            this.item[this.lowestCount] = val
        }else{
            for(let i=this.count;i>0;i--){
                this.item[i] = this.item[i-1]
            }
            this.count++
            this.lowestCount = 0
            this.item[0] = val
        }
    }
    removeFront(){
        if(this.isEmpty()){
            return undefined
        }
        let removeItem = this.item[this.lowestCount]
        delete this.item[this.lowestCount]
        this.lowestCount++
        return removeItem
    }
    removeBack(){
        if(this.isEmpty()){
            return undefined
        }
        this.count --
        let removeItem = this.item[this.count]
        delete this.item[this.count]
        return removeItem
    }
    size(){
        return this.count-this.lowestCount
    }
}
// const deQueue = new DeQueue()
// deQueue.addFront(1)
// deQueue.addFront(2)
// deQueue.addFront(3)
// deQueue.addBack(4)
// deQueue.removeBack()
// console.log(deQueue.item)

//palindromChecker, to check if a string is same backward as forward, like madam
function palindromChecker(str){
    const regAllChar = /^[A-Za-z ]+$/
    if(str === undefined || str === null || !regAllChar.test(str)) return false
    const formatStr = str.toLowerCase().split(' ').join('')
    const deQueue = new DeQueue()
    for(let i=0;i<formatStr.length;i++){
        deQueue.addBack(formatStr[i])
    }
    let isEqual = true
    let firsrChar,lastChar
    while(deQueue.size()>1 && isEqual){
    firsrChar = deQueue.removeFront()
    lastChar = deQueue.removeBack()
    if(firsrChar !== lastChar) isEqual =false
    }
    return isEqual
}
console.log(palindromChecker('ds f sD '))
