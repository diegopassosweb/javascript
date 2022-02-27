let num = [1,4,5,7,8]
num.push(1)
num.sort()


console.log(num)
console.log(`O valor tem ${num.length} posiçoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(9)
if(pos == -1){
    console.log('O valor nao foi enconttrado!')
} else {
    console.log(`O valor esta na posiçao ${pos}`)
}