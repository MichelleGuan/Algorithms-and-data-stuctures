#include <stdio.h>

int* buildArray(int* nums, int numsSize, int* returnSize){
    int * arr =(int *)malloc(sizeof(int)* numsSize);
    for(size_t i = 0; i< numsSize; i++){
        arr[i] = nums[nums[i]];
    }
    *returnSize=numsSize;
    return arr;
}