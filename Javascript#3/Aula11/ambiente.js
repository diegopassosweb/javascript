let num = [5, 8, 9, 2,3]
/*
num[3] = 6 // adiciona o valor 6 a cada 3
num.push(7) // adiciona o valor 7 na ultima posição
num.length // comprimento do vetor
num.sort() // organiza a primeira casa decimal em ordem crescente
*/
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posiçoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
console.log(`O valor 8 esta na posiçao ${pos}`)
