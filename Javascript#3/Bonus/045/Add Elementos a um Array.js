// ADD NOVOS ELEMENTOS
// REMOVER ELEMENTOS
// DIVIDIR ELEMENTOS
// DIVIDIR ARRAYS
// COMBINAR ARRAYS

//ADICIONANDO ELEMENTOS

const numeros = [1,2,3];

// Inicio
numeros.unshift(0); // empurra todos os valores para direita inserindo o ( 0 )
console.log(numeros);
// Meio
numeros.splice(1,0,'a'); // empurra para o meio, escolhe a posiçao 1, possibilidade de deletar 0, e escolhe o array 'a'
console.log(numeros);
// Final
numeros.push(5); // coloca o numero 5 no final
console.log(numeros);