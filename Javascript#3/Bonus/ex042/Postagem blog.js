// Objeto postagem de blog
// crie um objeto de postagem de blog que vai conter as seguintes propriedades
// postam
/* 
titulo
mensagem
autor
visualizaçoes
comentarios
    (autor,mensagem)
esta ao vivo
*/

let postagem = {
    titulo: 'a',
    mensagem:  'b',
    autor: 'c',
    visualizacoes: 10,
    comentarios: [// <----- Array---> comentarios: [ autor: 'a',mensagem: 'b'],
        {autor: 'a',mensagem: 'b'},
        {autor: 'a',mensagem: 'b'}
    ],
    estaAoVivo: true
}
console.log(postagem);
