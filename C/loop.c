#include <stdio.h>
#include <stdbool.h>
int main(void)
{
    for(int count = 0, test = 10; count <= 3; count++, test--){
        //printf("%d %d\n",count,test);
    }
    int a = 10;
    do{
        //printf("once");
    }while(a<5);
    int arr[5] = {10,2,3,4,5};
    int sum;
    for(int i; i< 5; i++){
        sum += arr[i];
        if(sum){
            //printf("%d",sum); 
            break;       
        }
        //printf("hahaha"); 
    }
    if(sum <10){
        //printf("%d",sum);        
    }
    else if(sum >10 && sum< 30){
        //if(sum == 24) printf("%d elseIf",sum);
    }
    else{
        //printf("%d haha",sum);    
    }
    //a == 10? printf("true") : printf("false");
    char ch = getchar();
    switch (ch)
    {
    case 'a':
        goto a;
        break;
    case 'b':
        goto b;
        break;
    case 'c':
        putchar(ch);
        break;
    default:
        break;
    }
    a: putchar(ch);
    b: putchar(ch);
    return 0;
}