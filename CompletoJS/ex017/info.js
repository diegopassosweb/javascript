var num = [9,5,2,] //lembre-se a contagem dos vetores começa do 0 1,2
num[3] = 6 //adicione o valor 6 na posição 3, criando a posição 3
num.push(7) //adicione o valor 7 na ultima posição ou vetor indicado
num.length //atributo, comprimento do vetor

num.sort(function (a,b){return a-b}) //coloca os valores em ordem crescente
 //num.sort() ---> só a primeira casa decimal 

num.indexOf(7) //busca o valor 7 nas variaveis e mostra a caixa que está

console.log(`Nosso vetor é o ${num} `)

for(var pos=0;pos < num.length;pos++){ //enquanto pos for menor do que 0, o pos vai receber pos +1
 console.log(`A posição ${pos} tem o valor ${num[pos]}`) // ou console.log(num[pos])
}

// Ou mais simplificado

for(var pos in num) { //para cada posição em num
    console.log(num[pos]) //vou mostrar o num pos
}

