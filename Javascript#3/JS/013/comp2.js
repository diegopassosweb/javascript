let num = [5,8,3,1,9]
num.push(7)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posiçoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1){
    console.log('Valor nao encontrando')
} else {
    console.log(`O valor 8 esta na posiçao ${pos}`)
}
