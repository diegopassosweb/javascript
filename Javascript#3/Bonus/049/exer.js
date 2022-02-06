const numeros = [1000,2000,3000,4000,5000,'numeros'];
console.log(numeros);
//final
const final = numeros.pop();
console.log(final); // removeu a string 'numeros'
console.log(numeros);
// inicio
const inicio = numeros.shift(); //removeu o numero 1000
console.log(inicio);
console.log(numeros);
// meio
const meio = numeros.splice(1,1); // removeu o numero 3000
console.log(meio);
console.log(numeros);
