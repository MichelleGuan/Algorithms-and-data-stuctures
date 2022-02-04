#include <stdio.h>

struct name{
    char first[10];
    char last[10];
};
struct info{
    struct name _name;
    int age;
    int work;
};
int sum(const struct info total[], int n);
int main() {
    struct info a[2] ={
       {{"michelle","guan"},
       28,
       10},
       {{"echo","guan"},
       32,
       20}
    };
    struct info *him;
    him = &a[1];
    //printf("%s %p",him->_name.first,him);
    int _sum = sum(a,2);
    printf("%d",_sum);
    return 0;
}

int sum(const struct info total[], int n){
    int _total = 0;
   for (size_t i = 0; i < n; i++)
   {
      _total += total[i].age + total[i].work;
   }
   
   return _total;
}
