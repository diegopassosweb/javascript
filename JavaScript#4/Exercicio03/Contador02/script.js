function contar() {
    let ini = document.getElementById('txti')
    let passo = document.getElementById('txtp')
    let fim = document.getElementById('txtf')
    let res = document.getElementById('res')
    if(ini.value.length == 0 || passo.value.length == 0 || fim.value.length == 0) {
        window.alert('[ERRO] Verifique os dados e tenta novamente!')
    } else {
        res.innerHTML = `Contando... <br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0) {
            window.alert('Passo invalido! Considerando PASSO 1')
             p = 1  
        }
        if( i <= f) {
        for(let c = i; c <= f; c +=p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
    } else {
        for(let c = i; c>= f; c -=p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
    }
    res.innerHTML += ` \u{1F3C1}`
} 
}