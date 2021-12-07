var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB){
        return null
    }
    let pA = headA
    let pB = headB
    while(pA !== pB){
        //Can't use !pA.next, since we need pA and pB both echo null to quit
        pA = pA == null ? headB : pA.next
        pB = pB == null ? headA : pB.next
    }
    return pA
};

var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB){
        return null
    }
    let store = new Set()
    while(headA){
        store.add(headA)
        headA = headA.next
    }
    while(headB){
        if(store.has(headB)){
            return headB
        }else{
            headB = headB.next
        }
    }
    return null
};