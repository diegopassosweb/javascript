// Factory Functions ( funcao de fabrica)

// const celular = {
//     marcaCelular : 'ASUS',
//     tamanhoTela : {
//         vertical : 155,
//         horizontal : 75
//     },
//     capacidadeBateria: 5000,
//     ligar: function() {
//         console.log('Fazendo ligação...')
//     }
// }

function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
    return {
        marcaCelular, //marcaCelular,
        tamanhoTela, //tamanhoTela,
        capacidadeBateria, //5000,

        ligar(){ //function() {
            console.log('Fazendo ligação...')
        }
    }
}

const celular1 = criarCelular('ZenFone',5.5,5000);
console.log(celular1);

