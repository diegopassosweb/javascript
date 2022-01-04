let valores = [5,8,3,9,3]
valores.push(1)
valores.sort()
console.log(valores)
console.log(`O valor tem ${valores.length} posiçoes`)
console.log(`O primeiro valor do vetor é ${valores[0]}`)
let pos = valores.indexOf(4)
if(pos == -1) {
    console.log(`O valor nao foi encontrado`)
} else {
    console.log(`O valor 8 está na posiçao ${pos}`)
}


