var mergeTwoLists = function(list1, list2) {
    if(list1 == null){
        return list2
    }else if(list2 == null){
        return list1
    }else if(list1.val <= list2.val){
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    }else{
        list2.next = mergeTwoLists(list1, list2.next )
        return list2
    }
 };

 var mergeTwoLists = function(list1, list2) {
    let pre = new ListNode(-1)
    let current = pre
    while(list1 != null && list2 != null){
    if(list1.val <= list2.val){
        current.next = list1
        list1 = list1.next
    }else{
         current.next = list2
         list2 = list2.next
    }
    current = current.next
    }
    current.next = list1 == null ? list2 : list1
    return pre.next
 };