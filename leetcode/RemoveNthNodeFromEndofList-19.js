var removeNthFromEnd = function(head, n) {
    let p = head
    let count = 0
    while(p !== null){
     p = p.next
     count++
    }
    let c = new ListNode()
    c.next = head
    let pre = c
    for(let i = 0; i< count; i++){
        if(i === count-n){
            pre.next = pre.next.next
            break
        }
        pre = pre.next
    }
    return c.next
};
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode()
    dummy.next = head
    let stack = []
    let p = dummy
    while(p !== null){
      stack.push(p)
      p = p.next
    }
    for(let i =0;i<n;i++){
      stack.pop()
    }
    let peek = stack[stack.length-1]
    peek.next = peek.next.next
    return dummy.next
};
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode()
    dummy.next = head
    let pA = dummy
    let pB = dummy
    for(let i =0;i<n;i++){
        pA = pA.next
    }
    while(pA.next){
        pA = pA.next
        pB = pB.next
    }
    pB.next = pB.next.next
    return dummy.next
};

