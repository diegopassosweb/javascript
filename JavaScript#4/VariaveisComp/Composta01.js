let num = [9,8,7,6,5,4]
num[3] = 6 //coloque o valor 6 na posiçao [3]
num.push(7) // coloque o valor 7 na ultima posiçao
num.length // atributo para saber o comprimento do vetor(quantos elementos)
num.sort() // coloque os elementos em ordem crescente de acordo com a primeira casa decimal
console.log(` Nosso vetor tem ${num.length} posiçoes`)
console.log(` O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if(pos == -1){
    console.log('O Valor não foi encontrado!')
} else {
console.log(`O valor X esta na posiçao ${pos}`)
}