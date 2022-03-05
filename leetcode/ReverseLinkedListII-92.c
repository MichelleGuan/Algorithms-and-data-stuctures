#include <stdio.h>

 struct ListNode {
    int val;
     struct ListNode *next;
 };

//FAILED VERSION
// struct ListNode* reverseBetween(struct ListNode* head, int left, int right){
//       struct ListNode* prv = NULL;
//       struct ListNode* cur = head;
//       size_t index = 1;
//       struct ListNode* _before = head->next;
//       struct ListNode* _after = head;
//       while(index <= right){
//         _after = _after->next;
//         index++;
//       }
//       while(cur){
//         if(index >= left && index<= right){
//             struct ListNode* next = cur->next;
//             cur->next = prv;
//             prv = cur;
//             cur = next;
//         }else{
//             cur = cur->next;
//         }
//         if(index == left && left > 1){
//             _before->next = NULL;
//         }
//         index ++;
//       }
//       if(left > 1){
//         head->next = prv;   
//       }
//       return left > 1 ? head : prv;
// }

struct ListNode* reverseList(struct ListNode* head);

struct ListNode* reverseBetween(struct ListNode* head, int left, int right){
    struct ListNode* before;
    struct ListNode* cur0 = head;
    struct ListNode* cur1 = head;
    struct ListNode* cur2 = head;
    for(size_t i = 1; i<left; i++){
        before = cur0;
        cur0 = cur0->next;
    }
    for(size_t i = 1; i<right; i++){
        cur1 = cur1->next;
    }
    struct ListNode* after = cur1->next;
    cur1->next = NULL;
    struct ListNode* reversed =  reverseList(cur0);
    struct ListNode* _reversed = reversed;
    if(left>1) before->next = NULL;
    while(_reversed->next){
        _reversed = _reversed->next;
    }
    _reversed->next = after;
    if(left>1){before->next = reversed;}else{head = reversed;}
    return head;

}
struct ListNode* reverseList(struct ListNode* head){
    struct ListNode* prv = NULL;
    struct ListNode* cur = head;
    while(cur){
        struct ListNode* next = cur->next;
        cur->next = prv;
        prv = cur;
        cur = next;
    }
    return prv;
}


