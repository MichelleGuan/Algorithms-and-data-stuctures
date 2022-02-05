#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#define MSG "test message"
#define SIZE 20
enum DAY{
    one=1,two=2,three=3
}day;
int main(void)
{
    char *head = MSG;
    char copy[SIZE] = "test message";
    char copy2[] = " stupid hahahahahah";
    //char *co = copy;
    //char words[10];
    //while (*head != '\0')
    //{
        //putchar(*(head++));
    //}
    //hest message hest message
    //copy[0] = 'h';
    //test message haha
    //co = "haha";
    //strcat(copy,copy2);
    int avaliable = SIZE - strlen(copy)-1;
    strncat(copy,copy2,avaliable);
    //puts(copy);
    //fgets(words,10,stdin);
    //puts(words);
    //enum DAY day;
    day = two;
    printf("%d",day);
    return 0;
}
