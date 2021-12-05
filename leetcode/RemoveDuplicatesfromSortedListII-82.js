var deleteDuplicates = function(head) {
    if(!head){
        return head
    }
    let pre = new ListNode(-1)
    pre.next = head
    let cur = pre
    while(cur.next && cur.next.next){
        if(cur.next.val === cur.next.next.val){
            let val = cur.next.val
            while(cur.next && cur.next.val === val){
                cur.next = cur.next.next
            }
        }else{
            cur = cur.next
        }
    }
    return pre.next
};

var deleteDuplicates = function(head) {
    if(!head || !head.next){
        return head
    }
    if(head.val === head.next.val){
      let val = head.val
      while(head.next && head.next.val === val){
        head.next = head.next.next
      }
      head = deleteDuplicates(head.next)
    }else{
      head.next = deleteDuplicates(head.next)
    }
    return head
  };