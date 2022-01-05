let num = [500,400,2000,1000,6000]
num[5] = 3000
num.sort(function(a,b){return a-b})
let pos = num.indexOf(3000)
if (pos == -1) {
    console.log(`O valor nao foi encontrado`)
}
console.log(`O valor 3000 esta na posiçao ${pos}`)


//console.log(`Lista de vetores ${num}`)
//console.log(`O vetor tem ${num.length} posiçoes`)
//console.log(`O primeiro valor do vetor é ${num[0]}`)

for(let pos in num) {
    console.log(`A posiçao ${pos} tem o valor ${num[pos]}`)
    
}
/*
versao mais longa
for(let pos=0; pos<num.length;pos++) {
    console.log(`A posiçao ${pos} tem o valor ${num[pos]}`)
}
*/