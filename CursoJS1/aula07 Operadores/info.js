/*
5 + 2 --> 7
5 - 2 --> 3
5 * 2 --> 10 multiplicaçao
5 / 2 --> 2.5 divisao real
5 % 2 --> 1 resto da divisao inteira
5 ** 2 --> 25 potencia
*/

// 5 + 3 / 2 --> 6.5 
//Predencia
/*

Primeiro
() paratenses----1
** potencia----2
* / % multiplicaçao e resto com divisao inteiraa----3
+- mais e menos-----4

*/

var a = 5 + 3 // 8
var b = a % 5 // 3
var c = 5 * b ** 2 // 45
var d = 10 - a / 2 // 6
var e = 6 * 2 / d // 2
var f = b % e + 4 / e // 3

//Simplificando
var n = 3

n = n + 4     // n+= 4
n = n - 4     // n-= 5
n = n * 4     // n*= 4
n = n / 2     // /= 2
n = n ** 2    // n**=2
n = n % 5     // n%= 5

//Incremento
var x = 5

x = x + 1 // igual x++
x = x -1 // igual  x--



