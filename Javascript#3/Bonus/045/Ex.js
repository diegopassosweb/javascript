const numeros = [1,5,10];

numeros.unshift(5); //adiciona o 5 na primeira casa
console.log(numeros);

numeros.splice(1,10,'numeros'); // delta o numero 1 e 10, inserindo tambem a string
console.log(numeros);

numeros.push(9); //adiciona 9 a ultima posiçao
console.log(numeros);