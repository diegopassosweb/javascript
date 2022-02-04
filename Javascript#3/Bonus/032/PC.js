function computador(marca,tamanhoTela,memoria){
    return {
        marca,
        tamanhoTela,
        memoria,
        ligar() {
            console.log("Ligando o computador...");
        }
    }
}
const outrocompurador = computador('LG',23,'8GB');
console.log(outrocompurador);