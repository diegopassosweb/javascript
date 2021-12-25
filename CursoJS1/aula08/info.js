//Relacionais
/*
> maior
< menor
>= maior igual
<= menor igual
== igual
!= nao igual
*/

/*
5 > 2 --> true          5 == '5' --> true
7 < 4 --> false         5 == 5 --> true
8 >= 8 --> true         5 === '5' --> false
9 <= 7 --> false        5 === 5 --> true
5 == 5 --> true
4 != 4 --> false
*/

preço >= 200.50 // o preço é maior ou igual a 200.50?
idade < 18 // a idade é menor do que 18?
curso == 'JavaScript' // o curso é JavaScript?
n1 != n2 // o primeiro numero é diferente do segundo?

//Logicos                       //Ordem
/*                      
! --> negaçao NAO               Primeiro --> !
&& --> conjunçao E              Segundo --> &&
|| --> disjunçao OU             Terceiro --> ||
*/

//Negaçao !        //Conjunçao &&                  //Disjunçao
/*                  true && true --> true           true || true --> true
!                   true && false --> false         true || false --> true
--> false           false & true --> false          false || true --> true
--> true            false && false --> false        false || false --> false
*/

//Exemplos
idade >= 15 && idade <= 17 // a idade esta entre 15 e 17?
estado == 'RJ' || estado == 'SP' // o estado é RJ ou SP?
salario > 1500 && sexo != 'M' // o salario é acima de 1500 e nao é homem?

//Odem de precedencia total
/*
() parenteses  **potencia  / divisao
> maior < menor >= menor igual
! nao
&& e
|| ou
*/

//Ternário
var media = 5.5
media > 7? 'APROVADO' : 'REPROVADO'



