// Objeto Endereço

// Criar um objeto endereco que contem:
// Rua
// Cidade
// CEP
// Exiba o
const cep = '69900‑000';
const rua = 'Rua de fulano e ciclano';
const city = 'São Paulo';
const enderecos = 
` Nosso endereço fica na ${rua} em ${city} no cep: ${cep}`
console.log(enderecos);
/////////////////////////////////////////


let endereco = {
    ruA: 'a',
    cidade: 'b',
    cepi: 'c'
};
function exibirEndereco(endereco){
    for(let chave in endereco)
    console.log(chave,endereco[chave]);
}
exibirEndereco(endereco);
