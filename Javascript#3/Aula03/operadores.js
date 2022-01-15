/* Aritméticos
+  adiçao
- reduçao
* multiplicacáo
/ divisao
% resto da divisao
** potencia
*/
5 + 2 --> 7
5 - 2 --> 3
5 * 2 --> 10
5 / 2 --> 2.5
5 % 2 --> 1
5 ** 2 --> 25


/*Precedencia
5 + 3 / 2 ---> 6.5
(5 + 3)/2 ---> 4

Primeiro ()
Segundo  **
Terceiro * / % 
Quarto + -
*/
var a = 5 + 3 --> 8
var b = a % 5 --> 3
var c = 5*b**2 --> 45
var d = 10 - a/2 --> 6
var e = 6*2/d --> 2
var f = b % e + 4/e --> 3

//Auto-Atribuiçoes e Simplificado 
var n = 3  
n = n + 4       // n += 4
n = n - 5       // n -= 5
n = n * 4       // n *= 4
n = n /2        // n /= 2
n = n **2       // n **= 2
n = n % 5       // n %= 5
// Incremento
var x = 5
x = x + 1  // x += 1 -------> x++
x = x - 1  // x -= 1 -------> x--
