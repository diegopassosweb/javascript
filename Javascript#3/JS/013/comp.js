// let num = [5,8,3,2,9]
// num[3] = 6
// num.push(7)
// num.length
// num.sort()
// console.log(`Nosso vetor é o ${num}`)

let num = [5,8,4] // indices 0 1 2 3 4 5
num[3] = 6 // adiciona o valor a posiçao 3
num.push(7) // adiciona um valor a ultima posiçao
num.length // mostra quantas posiçoes o vetor tem
num.push(1) // adiciona o valor a primeira posiçao
num.sort() // coloca em ordem de acordo com a primeira casa decimal
num.indexOf(7) // procura no vetor onde esta o valor 7

console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso vetor tem ${num.length} posiçoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)