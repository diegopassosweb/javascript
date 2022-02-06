const mercado = {
    carne: 30,
    arroz: 15,
    legumes: 10,
    tamanhoM: {
        vertical: 500,
        horizontal: 500
    },
    abrir: function () {
        console.log('Abrindo o mercado...');
    }
}
const novoObjeto = Object.assign({ // cria um novo objeto com a opçao de adicionar um novo item
    frutas: 10
},mercado);
console.log(novoObjeto);
//////

const objeto2 = {...mercado} //cria um novo objeto
console.log(objeto2);

