var reverseList = function(head) {
    if(!head || !head.next){
        return head
    }
    let third = head.next.next
    head.next.next = head
    head = head.next
    head.next.next = null
    if(!third) return head
    let last = third.next
    while(third){
        third.next = head
        head = third 
        third = last
        if(last) last = last.next
    }
    return head
};


var reverseList = function(head) {
    let cur = head
    let prv = null
    while(cur){
        let next = cur.next
        cur.next = prv
        prv = cur
        cur = next
    }
    return prv
};
