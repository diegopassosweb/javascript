// camelCase - umDoisTresQuatro
// function criarCelular(marcaCel,tamanhoTel,capacidadeB){
//     return {
//         marcaCel,
//         tamanhoTel,
//         capacidadeB,
//         ligar(){
//             console.log("Fazendo ligação...")
//         }
//     }
// }

//Pascal Case - UmDoisTresQuatro
function Celular(marcaCel,tamanhoTel,capacidadeB){
    this.marcaCel = marcaCel,
    this.tamanhoTel = tamanhoTel
    this.capacidadeB = capacidadeB
    this.ligar = function() {
        console.log("Fazendo ligação...");
    }
}

const celular = new Celular('asus',5.5,5000);
console.log(celular);