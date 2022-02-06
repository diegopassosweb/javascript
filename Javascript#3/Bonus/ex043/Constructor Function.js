// Constructor function
// Criar um objeto postagem
// titulo,mensagem,autor,visualizaçoes,comentarios,esta ao vivo

const postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    visualizacoes: 15,
    comentarios: [ // <-- ARRAY [ {} {} ]
        {autor: 'a',mensagem: 'b'},
        {autor: 'a',mensagem: 'b'}
    ],
    estaAoVivo () {
        console.log('Entrando ao vivo...')
    }
}
console.log(postagem);
