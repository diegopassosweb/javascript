let num = window.document.getElementById('txtn')
let lista = window.document.getElementById('flista')
let res = window.document.getElementById('res')
let valores = []

function isnumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) { //verifica se o numero esta entre 1 e 100
        return true
    } else {
        return false
    }
}

function inlista(n,l) {
    if(l.indexOf(Number(n)) != -1) {// verifica se o numero esta na lista
        return true
    } else {
        return false
    }
}
function adicionar() {
   if(isnumero(num.value) && !inlista(num.value,valores)) { //verifica se é um numero e se nao esta em lista
        valores.push(Number(num.value)) //adiciona o valor dentro de valores
        
        let item = document.createElement('option')//#1
        item.text = `Valor ${num.value} adicionado`//#2
        lista.appendChild(item)//#3
        res.innerHTML = ''//quando adicionar um elemento, limpar em seguida
        //esses 3 comandos mostram o valor no elemento select

   }else {
       window.alert('Valor invalido ou ja encontrado na lista')
   }
   num.value = '' //#1
   num.focus() //#2
   //esses dois comandos apagam automaticamente o digitado, dando certo ou errado
}

function finalizar() {
    if(valores.length ==0) {// testa para saber se recebeu um valor antes de finalizar
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length //para saber quantos elementos o vetor tem

        let maior = valores[0] //o primeiro valor é o maior
        let menor = valores[0]//o primeiro valor é o menor

        let soma = 0 // soma começa em 0
        let media = 0// media começa em 0

        for( let pos in valores){//para cada posiçao em valores faca o teste

            soma += valores[pos] // soma começa com 0 e vai somando os valores

            if(valores[pos] > maior)//se o valores pos for > maior
                maior = valores[pos]//deixa de ser o anteior e passa a ser este
            if(valores[pos] < menor)//se o valores pos for < menor
                menor = valores[pos]// menor passa a ser o valor
        }
        media = soma / tot // a media é a soma dividido pelo tot

        res.innerHTML = '' //para zerar o resultado
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados</p>` //adiciona mais um a string
        res.innerHTML += `<p>O maior valor informado foi ${maior} </p>` 
        res.innerHTML += `<p>O menor valor informado foi ${menor} </p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma} </p>` 
        res.innerHTML += `<p>A media dos valores digitados é ${media} </p>` 
    }
}