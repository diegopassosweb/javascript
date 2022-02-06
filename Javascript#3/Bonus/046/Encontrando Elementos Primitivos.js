// Encontrando elementos primitivos

const numeros = [1,2,3,1,4];
console.log(numeros.indexOf(2)); // busca o numero 2 dentro do array e retorna a onde esta

console.log(numeros.lastIndexOf(1));// busca a ultima ocorrencia no indice


console.log(numeros.indexOf(2) !== -1); // se exite o valor 2, retorna true ou false
// ou tambem
console.log(numeros.includes(2));