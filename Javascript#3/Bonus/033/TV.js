function televisao(marcaTV,tamanhoTV,precoTV){
    this.marcaTV = marcaTV,
    this.tamanhoTV = tamanhoTV,
    this.precoTV = precoTV,
    this.ligar = function(){
        console.log('Ligando a televisao');
    }  
}
const tvMonitor = new televisao('LG',30,2000);
console.log(tvMonitor);