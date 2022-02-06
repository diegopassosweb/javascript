// Combinando e cortando Arrays
const primeiro = [{id:1}]; // 1 2 3
const segundo = [4,5,6]; // tipos primitivos 4,5,6
primeiro[0].id = 10;
//Combinar
const combinado = primeiro.concat(segundo); // combinado o array
console.log(combinado);
//Dividr em 3 opçoes
const cortado = combinado.slice(); // sempre o ultimo -1 
console.log(cortado);

