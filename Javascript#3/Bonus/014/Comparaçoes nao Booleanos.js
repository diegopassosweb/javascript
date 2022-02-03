// Falsy

// undefined
// null
// 0 
// false
// ''
// NaN - not a number (valores inválidos)

// Truthy

let corPersonalizada = 'vermelho';
let corP= 'azul';
let corPerfil = corPersonalizada || corP; // Encontrou a cor personalizada primeiro

console.log(corPerfil);

