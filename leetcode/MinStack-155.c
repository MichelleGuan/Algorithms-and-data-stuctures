#include <stdio.h>
#include <stdlib.h>
#define MAXSIZE 30000

typedef struct {
    int top;
    int *data;
} MinStack;

MinStack* minStackCreate() {
    //first malloc the stuct space then malloc stuct's data space
    MinStack *obj = (MinStack *)malloc(sizeof(MinStack));
    obj->data = (int *)malloc(MAXSIZE * sizeof(int));
    obj->top = -1;
    return obj;
}

void minStackPush(MinStack* obj, int val) {
    // we shouldn't fix max size, but extend the space when needed
    // if(obj->top==obj->maxsize-1){
    //     int new_max = 2 * obj->maxsize;
    //     int *new_data = (int *)malloc(new_max * sizeof(int));
    //     memcpy(new_data, obj->data, sizeof(int)*obj->maxsize);
    //     free(obj->data);
    //     obj->data = new_data;
    //     obj->maxsize = new_max;
    // }
    if(obj->top == -1){
        obj->top++;
        obj->data[obj->top] = val;
        obj->top++;
        obj->data[obj->top] = val;
    }else{
        int temp = obj->data[obj->top];
        obj->top++;
        obj->data[obj->top]=val;
        if(temp<val){
          obj->top++;
          obj->data[obj->top]=temp;
        }else{
          obj->top++;
          obj->data[obj->top]=val;
        }
  }
}

void minStackPop(MinStack* obj) {
    if(obj->top != -1){
        obj->top--;
        obj->top--;
    }
}

int minStackTop(MinStack* obj) {
    //min value is stored on top and next one is new push value
   if(obj->data == -1) return;
   return obj->data[obj->top-1];
}

int minStackGetMin(MinStack* obj) {
    return obj->data[obj->top];
}

void minStackFree(MinStack* obj) {
    //Free only free the malloc space, don't change the pointer, so assign it to NULL
    free(obj->data);
    obj->data = NULL;
    free(obj);
    obj = NULL;
}
/**
 * Your MinStack struct will be instantiated and called as such:
 * MinStack* obj = minStackCreate();
 * minStackPush(obj, val);
 
 * minStackPop(obj);
 
 * int param_3 = minStackTop(obj);
 
 * int param_4 = minStackGetMin(obj);
 
 * minStackFree(obj);
*/