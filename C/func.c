#include <stdio.h>
#include <stdbool.h>
#define WIDTH 1.1
#define HEIGHT 2.2
float square(float width, float height);
void to_binary(int n);
void change(int * u, int * y);
int main(void)
{
    // float _square = square(WIDTH,HEIGHT);
    // printf("%f",_square);
    int num;
    while (scanf("%u",&num) == 1)
    {
       //to_binary(num);
       //printf("\n");
    }
    //printf("done");
    int x=5, y =10;
    change(&x,&y);
    printf("%i %i",x,y);
    return 0;
}
void change(int * u, int * y)
{
   int temp;
   temp = *u;
   *u = *y;
   *y = temp;
}
float square(float width, float height)
{
    return width*height;
}
void to_binary(int n)
{
   int r;
   r = n % 2;
   if (n>=2)
   {
       to_binary(n/2);
   }
   putchar(r == 0? '0':'1');
   return;
}