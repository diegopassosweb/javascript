// Divisivel por 3 => Fizz
// Divisivel por 5 => Buzz
// Divisivel por 3 e 5 => FizzBuzz
// Nao divisivel por 3 ou 5 => entrada
// Nao é um numero => 'NaN'

// ( !== estritamente nao igual)
// ( % resto da divisao )

const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada){ // entrada seria o valor adicionado
    
    if(typeof entrada !== 'number') // se não for um numero
        return 'Não é um numero';
    if((entrada % 3 == 0) && (entrada % 5 == 0)) // se o resto da divisao da entrada e 3 for igual (==) a 0
        return 'FizzBuzz';
    if(entrada % 3 == 0)
        return 'Fizz';
    if(entrada % 5 == 0)
        return 'Buzz';
    
    return entrada;
}
