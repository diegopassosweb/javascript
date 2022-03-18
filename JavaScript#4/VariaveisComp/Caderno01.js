let num = [5,2,8,9,3]
num[3] = 6 //coloca o valor 6 na posiçao [3]
num.push(7) //adiciona o valor 7 na ultima posiçao
num.length //mostra quantos elementos existem no vetor
num.sort() //colocam em ordem de acordo com a primeira casa decimal
num.indexOf(7) //Procura onde esta o valor 7, retorna a posiçao

console.log(num)
console.log(`O vetor tem ${num.length} posiçoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if( pos == -1){
    console.log('O valor nao foi encontrado')
} else {
console.log(`O valor 8 esta na poisçao ${pos}`)
}