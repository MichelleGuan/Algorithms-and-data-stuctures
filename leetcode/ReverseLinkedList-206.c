#include <stdio.h>

 struct ListNode {
    int val;
     struct ListNode *next;
 };

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