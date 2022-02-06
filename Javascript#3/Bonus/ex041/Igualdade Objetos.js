// Igualdade de Objetos

function endereco(rua,cidade,cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}
const endereco1 = new endereco('a','b','c');
const endereco2 = new endereco('a','b','c');

function igualdade(endereco1,endereco2){
    // comparar se as propriedades sao iguais
    if(endereco1.rua === endereco2.rua &&
        endereco1.cidade === endereco2.cidade &&
        endereco1.cep === endereco2.cep){
        return 'igual' //true
    } else{
        return 'Desigual' //false
    }
}
console.log(igualdade(endereco1,endereco2));
function enderecoMemoria(endereco1,endereco2){
    // comparando se a referencia do objeto aponta para o mesmo local da memoria
    if(endereco1 === endereco2){
        return 'igual'
    }else
        return 'Desigual'
}
console.log(enderecoMemoria(endereco1,endereco2));
