// Criar um metodo para ler propriedades de um objeto e
// exibir somente as propriedades do tipo string que estao nesse objeto

const filme = {
    titulo : 'Vingadores',
    ano : 2018,
    diretor: 'Robin',
    personagem : 'Thor',
}
exibirPropriedades(filme);
function exibirPropriedades(obj){
    for(prop in obj) // para cada prop em obj
    if(typeof obj[prop] === 'string') // se o tipo do obj[prop] é uma string
        console.log(prop,obj[prop])
     // prop ---> obj[prop]
}