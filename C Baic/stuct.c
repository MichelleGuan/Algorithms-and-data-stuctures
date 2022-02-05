#include <stdio.h>

struct Complex {
    int imag;
    int real;
};

struct Coord {
    struct Complex* x;
    struct Complex* y;
};

int main() {

    struct Complex cx1 = {1, 1};
    struct Complex cx2 = {2, 2};
    struct Complex cx3 = {3, 3};

    // cd1 = {{1, 1}, {2, 2}}
    struct Coord cd1 = {&cx1, &cx2};
    // cd2 = {{1, 1}, {2, 2}}
    struct Coord* cd2 = &cd1;   // ref copy
    // cd3 = {{1, 1}, {2, 2}}
    struct Coord cd3 = cd1;     // val copy(shallow copy)

    // cd1 && cd2 has no update
    // cd3 = {{1, 1}, {3, 3}}
    cd3.y = &cx3; // ref copy

    // cd1 = {{-1, 1}, {2, 2}}
    // cd2 = {{-1, 1}, {2, 2}}
    // cd3 = {{-1, 1}, {3, 3}}
    cd3.x->imag = -1;           // val copy(primary type)
    printf("%i",cx1.imag); 

    // cd1 = {{-1, 1}, {3, 3}}
    // cd2 = {{-1, 1}, {3, 3}}
    // cd3 = {{-1, 1}, {3, 3}}
    cd2->y = &cx3;              // ref copy

    return 0;
}