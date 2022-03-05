#include <stdio.h>
#include <stdbool.h>
#include <string.h>
float total(float * start, float * end);
void extend( int x, int y,float ar[x][y]);
int main(void)
{
    float arr[2][2] ={
        {1.22,2.22},
        {3.33,4.22}
    };
    float arr2[3] = {1.1,2.2,3.3};
    //printf("%lu",sizeof arr / sizeof arr[0][0]);
    for(size_t i = 0; i < 2; i++){
        for (size_t j = 0; j < 2; j++)
        {
            //printf("%f \n",arr[i][j]);
        }
        
    }
    float * p = &arr[0][0];
    // printf("%p \n",p);
    // printf("%f \n",*p);
    // printf("%f \n",*(p+1));
    // printf("%f \n",*(p+2));
    //total(p, p + 4);
    total(*arr,*arr +4);
    //printf("%f \n",(*arr)[1]);
    extend(2,2,arr);
    int arr2[10];
    for(size_t i = 0; i< 10; i++){
        arr2[i] = 10;
    }
    return 0;
}
void extend( int x, int y,float ar[x][y]){
     printf("%f \n",ar[1][1]);
     return;
}
float total(float * start, float * end)
{
       //printf("%ld \n",end -start);
       //printf("%ld \n",start -end);  
       float total = 0.00;
       while (start < end)
       {
           total += *start;
           start++;
       }
       //printf("%f \n",total);
       return total; 
}
