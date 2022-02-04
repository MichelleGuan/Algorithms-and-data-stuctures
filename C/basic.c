#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#define PRAISE "you are great"
int pound(int a);
int main(void)
{
    int num, num2;
    float weight, height;
    num =1;
    weight = 1.2344;
    num2 = 10 * num;
    /*printf("%f %d aa\n",weight, num2);
    scanf("%f",&height);
    printf("%f\n",height);*/
    short num3;
    long long num4;
    num3 = 1234;
    num4 = 349271809274867;
    //printf("%hd %lld aa\n",num3, num4);
    // getchar();
    char a, b;
    a = '?';
    b = '\'';
    //printf("%c %c a \n",a, b);
    /*#define BOOL int
    #define TRUE 1
    #define FALSE 0
    BOOL flag = FALSE;
    BOOL flag2 = TRUE;*/
    bool flag = true;
    bool flag2 = false;
    //printf("%d %d\n",true, flag2);
    //printf("%zd\n",sizeof(long double));
    const char hello[40] = "Good morning";
    int rv = 0;
    //rv = printf("%s , %lu\n", hello, strlen(PRAISE));
    //printf("%f\n", 0.1 + 0.2);
    while (rv<5)
    {
       ++rv;
    }
    //printf("%d\n",rv);
    //int y = 6*2 + 2*3;
    //char y[20] = "haha" + "lala";
    //printf("%s\n",y);
    int res = 0; 
    res = pound(20);
    printf("%d\n",res);
    return 0;
}

int pound(int a){
   while (a>5)
    {
      a--;
    }
    return a;
}