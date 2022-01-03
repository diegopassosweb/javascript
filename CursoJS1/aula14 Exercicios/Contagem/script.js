function contar() {
// Seleçoes
var ini = window.document.getElementById('txti')
var fim = window.document.getElementById('txtf')
var passo = window.document.getElementById('txtp')
var res = window.document.getElementById('res')

    //Confirmaçoes
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert(`[ERRO] Faltam dados!`)
        res.innerHTML = `Impossivel contar!`
    } else {
       res.innerHTML = `Contando: <br>`
       // Convertendo as variaveis para numero abaixo
      let i = Number(ini.value)
      let f = Number(fim.value)
      let p = Number(passo.value)
      if(p <= 0 || p > f) {  // se o Passo for menor igual a 0
           window.alert('Passo invalido! Considerando Passo 1')
           p = 1
       }
       // Contagem crescente
       if (i < f) {
        for(let c = 1; c <= f; c += p) {
            // Mostra o indicador
            res.innerHTML += ` ${c} \u{1F449}`
       }
    } else {
        // Contagem regressiva
        for(let c = 1; c >= f; c -= p ) {
            res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        // Mostra a bandeirinha
        res.innerHTML += ` \u{1F3C1} `
    } 

}