//Primos
//Compostos

//ex: 10, 11
// 10 ( 1 ou por ele mesmo)
// 10 ( 1,2,4,6,10) não é primo
// 11 (1,11) é primo

// nPrimos(15);
// function nPrimos(limite){
//     for(let numero = 2; numero <= limite; numero++){
//         let ehPrimo = true;
        
//         for(let divisor = 2; divisor < numero; divisor++){ //ignora o numero 2 e por ele mesmo e recebe +1
//             if(numero % divisor === 0){
//                 ehPrimo = false;
//                 break;
//             }
//         }
//         if(ehPrimo) console.log(numero);
//     }
// }

limpo(15);
function limpo(limite){
    for(let numero = 2; numero <= limite; numero++){

        if(primo(numero)) console.log(numero);
    
    }
}

function primo(numero){

    for(let divisor = 2; divisor < numero; divisor++){
        if(numero % divisor === 0){
            return false;
        }
    }
    return true;
}