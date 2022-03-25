function executarconsole(fn, num1, num2) {
    console.log(fn(num1,num2))
}

function somar(a,b) {
    return a + b
}

executarconsole(somar, 2,3)

//exemplo 2

function precoComImposto(imposto, preco) {
    return preco * ( 1 + imposto)
}
console.log(precoComImposto(0.11, 54.78))
console.log(precoComImposto(0.11, 12.78))
console.log(precoComImposto(0.11, 31.78))
console.log(precoComImposto(0.11, 11.78))
console.log(precoComImposto(0.11, 22.78))

//versao 2 currying

function precoComImposto2(imposto) {
    function calcular(preco) {
        return preco * ( 1 + imposto)
    }
    return calcular
}
const precoComImpostoSP = precoComImposto2(0.11)
const precoComImpostoRJ = precoComImposto2(0.15)
const precoComImpostoCE = precoComImposto2(0.13)

console.log(precoComImpostoSP( 54.78))
console.log(precoComImpostoRJ( 12.78))
console.log(precoComImpostoCE( 31.78))
console.log(precoComImpostoSP( 11.78))
console.log(precoComImpostoRJ( 22.78))
