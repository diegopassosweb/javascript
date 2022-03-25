//COMO UMA CLASSE

function menu() {
    
    function esconderMenu() {

    }
    esconderMenu()
}

//Exemplo 2 FIRST CLASS CITZING FUNCTION

const a = 3
const multiplicar = function (a,b) { // pode ser let
    return a * b
}

console.log(multiplicar(5,6))

//Exemplo 3 - CRIANDO UM ARRAY

const operacoes = [
    function (a,b) {
        return a + b
    },
    function (a,b) {
        return a - b
    },
    function (a,b) {
        return a * b
    },
    function (a,b) {
        return a / b
    }
]

const substracao = operacoes[1]

console.log(operacoes[0](5,6))
console.log(substracao(5,6))
console.log(operacoes[2](5,6))
console.log(operacoes[3](5,6))