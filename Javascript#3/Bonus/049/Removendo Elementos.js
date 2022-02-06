// Removendo Elementos

const numeros = [1,2,3,4,5,6];
numeros.push()
numeros.unshift();
numeros.splice();

//Final
const ultimo = numeros.pop(); //remove o ultimo indice 6
console.log(ultimo);
console.log(numeros);
// Inicio
const primeiro = numeros.shift(); // remove o primeiro elemento 1
console.log(primeiro);
console.log(numeros);
// Meio
const meio = numeros.splice(2,1);// remove o numero do meio, 4
console.log(meio);
console.log(numeros);
