let num = [5, 8, 9, 3]
num[3] = 6 //Adiciona o valor 6 a posiçáo 3
num.push(7) //Adiciona o valor 7 a ultima posiçao
num.length //Comprimento do vetor
num.sort(function(a, b){return a-b}) //coloca em ordem alfabetica e crescente
num.indexOf(7) //pesquisa o valor 7 nos vetores e mostra a posiçao
console.log(`Nosso vetor é o ${num}`)

let valores = [5,8,3,9,3]
for (let pos=0;pos<valores.length;pos++) { //for iniciaçao;teste;adiçao(looping)
console.log(`A posicáo ${pos} tem o valor ${valores[pos]}`)
}
//console.log(valores)
//Mais simplificado
let valores = [5,8,3,9,3]
for (let pos in valores) {
    console.log(`A posiçao  ${pos} tem o valor ${valores[pos]}`)
}