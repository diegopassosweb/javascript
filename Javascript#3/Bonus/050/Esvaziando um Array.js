// Esvaziando um Array
let numeros = [1,2,3,4,5,6];
let outros = numeros;
//Soluçao 1 ?????????????????????????
// numeros = [];
// console.log(outros);

//Soluçao 2 mais limpo
// numeros.length = 0;
// console.log(numeros);
// console.log(outros);

//Soluçao 3
numeros.splice(0,numeros.length);
console.log(numeros);
console.log(outros);

//Solucao 4 //nao recomendavel 
while (numeros.length > 0)
numeros.pop();
