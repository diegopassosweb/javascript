
// console.log(false && true); // false
// console.log(false && false); // false
// console.log(true && true); // true


// Operador Logico e (&&)
// Retorna TRUE se os dois operandos forem true

// let maiorIdade = false;
// let temCarteira = true;
// let podeAplicar = maiorIdade && temCarteira;
// console.log(podeAplicar)

// Operador logico ou (||)
// Retorna true se um dos operandos forem true

// let maiorIdade = false;
// let temCarteira = true;
// let podeAplicar = maiorIdade || temCarteira;
// console.log(podeAplicar)

// Operador NOT (!)

let maiorIdade = false;
let temCarteira = false;
let podeAplicar = maiorIdade || temCarteira;
console.log('Pode aplicar: ',podeAplicar)

let candidatoRecusado = !podeAplicar;
console.log('Candidato Recusado ',candidatoRecusado);


