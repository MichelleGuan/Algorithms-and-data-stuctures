class ListNode {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.next = null
        this.prev = null
    }
}
//Version ONE
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.hash = new Map()
        this.dummyHead = new ListNode()
        this.dummyTail = new ListNode()
        this.dummyHead.next = this.dummyTail
        this.dummyTail.prev = this.dummyHead
    }
    get(key) {
        let node = this.hash.get(key)
        if(this.hash.has(key)){
            this.moveToHead(node)
            return node.value
        }
        return -1
    }
    put(key, value) {
        let node = this.hash.get(key)
        if(this.hash.has(key)){
            node.value = value
            this.hash.set(key,node)
            this.moveToHead(node)
        }else{
            let newNode = new ListNode(key,value)
            this.addToHead(newNode)
            this.hash.set(key,newNode)
            if(this.hash.size > this.capacity){
                this.removeLRUItem()
            }   
        }  
    }
    moveToHead(node) {
        this.removeFromList(node)
        this.addToHead(node)
    }
    removeFromList(node) {
        node.prev.next = node.next
        node.next.prev = node.prev
    }
    addToHead(node) {
        node.prev = this.dummyHead
        node.next = this.dummyHead.next
        this.dummyHead.next.prev = node
        this.dummyHead.next = node
    }
    removeLRUItem() {
        let lru = this.removeFromTail()
        this.hash.delete(lru.key)
    }
    removeFromTail() {
        let lru = this.dummyTail.prev
        this.removeFromList(lru)
        return lru
    }
}
//Version Two
//<--> <tail> <--virtual dummy--> <head> <--> doubly circular linked list
class LRUCache2 {
    constructor(capacity) {
        this.capacity = capacity
        this.hash = new Map()
        this.head = null
    }
    get(key) {
        let node = this.hash.get(key)
        if(this.hash.has(key)){
            this.moveToHead(node)
            return node.value
        }
        return -1
    }
    put(key, value) {
        let node = this.hash.get(key)
        if(node){
            node.value = value
            this.hash.set(key,node)
            this.moveToHead(node)
        }else{
            node = new ListNode(key,value)
            this.hash.set(key,node)
            this.pushToHead(node)
            if(this.hash.size > this.capacity){
                this.removeLRUItem()
            }   
        }  
    }
    pushToHead(node){
        if(this.head === null){
            this.head = node
            this.head.prev = this.head
            this.head.next = this.head
        }else{
            node.prev = this.head.prev
            node.next = this.head
            this.head.prev.next = node
            this.head.prev = node
            this.head = node
        }
    }
    removeFromList(node) {
        node.prev.next = node.next
        node.next.prev = node.prev
    }
    moveToHead(node){
        if(node !== this.head){
            this.removeFromList(node)
            this.pushToHead(node)
        }
    }
    removeLRUItem() {
        let lru = this.head.prev
        this.removeFromList(lru)
        this.hash.delete(lru.key)
    }
}


