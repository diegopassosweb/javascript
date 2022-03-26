//variaveis (var, let e const)
// var a = 1
// let b = 2
// const c = a + b

// console.log(c)


//operadores
//unarios
// let a = 3
// a++ //postfix
// ++a //prefix
// console.log(a)

//binarios (aritmeticos, relacionais, atribuiçao, logicos)
// let b = 557
// let x = a % b //infix

// let a = 3
// a += 3
// a = a + 3
// a *= 7
// console.log(a)

// >< >= <= !=
// console.log( 3 > 2)
// console.log(!(3 < 2))

// console.log(!!'teste')
// console.log(3+4*5+6)

// //ternario
// let temsol = true
// let temdinheiro = true
// let sair = temsol || temdinheiro
// let res = sair ? 'sim' : 'nao'
// console.log(res)


//estruturas de controle
// let nota = 8
// let comp = true
// if(nota >= 7 && comp) {
//     console.log('Aprovado')
// } else if(nota >= 9) {
//     console.log('Excelente')
// } else {
//     console.log('Recuperaçao')
// }

// for(let i = 0; i <= 100; i += 10) {
//     console.log(i)
// }

//Array - > 0  1 2 3 4
// const notas = [6.5, 7.7, 3.2, 4.3]
// console.log(notas[2])

// for(let i = 1; i <= notas.length; i++) {
//     console.log(notas[i - 1])
// }

// for(let nota of notas) {
//     console.log(nota)
// }

//funcao

function soma(a = 0, b = 0) {
    console.log(a + b)
    }

    soma(3)
    


//objeto