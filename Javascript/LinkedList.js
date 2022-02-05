class Node{
    constructor(elememt){
        this.elememt = elememt
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.count = 0
        this.head = null
    }
    push(element){
        const node = new Node(element)
        let current
        if(this.head === null){
            this.head = node
        }else{
            current = this.head
            while(current.next !== null){
                current = current.next
            }
            current.next = node
        }
        this.count++
    }
    print(){
        if(this.head === null) return undefined
        let current = this.head.next
        let obj = this.head
        let trans
        for(let i = 1; i< this.count && current!== null;i++){
           trans = current
           trans = obj.next
           current = current.next
        }
        return JSON.stringify(obj)
    }
    removeAt(index){
        if(index <0 || index>=this.count) return undefined
        let current = this.head
        let previous
        if(index === 0){
            this.head = current.next
        }else{
            for(let i=0;i<index;i++){
                previous = current
                current = current.next
            }
            previous.next = current.next
        }
        this.count --
        return current.elememt
    }
    insert(element,index){
        if(index <0 || index>=this.count) return undefined
        const node = new Node(element)
        let current = this.head
        let previous
        if(index === 0){
            node.next = current
            this.head = node
        }else{
            for(let i=0;i<index;i++){
                previous = current
                current = current.next
            }
            previous.next = node
            node.next = current
        }
        this.count ++
        return true
    }
}
const linkedList = new LinkedList()
linkedList.push(1)
linkedList.push(2)
linkedList.push(3)
linkedList.push(4)
linkedList.removeAt(2)
linkedList.insert(11,2)
linkedList.insert(12,0)
console.log(linkedList.print())