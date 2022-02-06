//Constructor function
// Criar um objeto postagem
// titulo,mensagem,autor,visualizaçoes,comentarios,esta ao vivo

function Postagem(titulo,mensagem,autor){ // iniciando letra maiuscula em constructor function P
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.aturo = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}
let postagem = new Postagem('a', 'b','c');
console.log(postagem);