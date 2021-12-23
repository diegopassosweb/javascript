//1 função par ou impar
function parimp (n) { // (n) parametro
    if (n%2==0) { // (ação) se N for divisivel(%) por 2 e resto (==)(igual) 0
        return 'par'
    } else {
        return 'impar'
    }
}
//Ou console.log(parimpar(11))
var res = parimp(11) // (parimp) chamada
console.log(`O numero é ${res}`)

//2 função soma
function soma(n1=0, n2=0) { //para retirar o resultado indefinido adicionar n1=0 e n2=0
    return n1 + n2
}
console.log(soma(2))

//3 variavel com função
var v = function(x) {
    return x*2 // retorna o dobro de (x)
}
console.log(v(5))

//4 função fatorial
function fatorial(n) {
    var fat = 1
    for (var c = n; c > 1; c--) { //enquanto var [c] for igual a [n] e [c] maior que [1], [c] vai dimiuindo [1]
        fat *= c //fat recebe fat vezes(*) o [c]
    }
    return fat
}
console.log(fatorial(5))
// 5! = 5 x 4 x 3 x 2 x 1 = 120