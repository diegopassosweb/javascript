// Tipo primitivo
const mensagem = 'minha primeira mensagem'; //STRING
console.log(typeof mensagem);

// tipo objeto
const outraMsg = new String('Bom dia'); // OBJETO
console.log(typeof outraMsg);

// tipo number
const umNumero = new String('Bom dia'); // Number
console.log(typeof umNumero.length);

mensagem.includes('primeira') //---> pesquisa se tem a palavra primeira na string
//true
mensagem.includes('vermelha') // --> nao existe na string
//false
mensagem.startsWith('minha')// --> inicia com ( minha ) ?
//true
mensagem.startsWith('verde')// --> inica com ( verde ) ?
//false
mensagem.endsWith('mensagem') // --> termina com ( mensagem ) ?
//true or false
mensagem.indexOf('primeira') //indica da string
// 6
mensagem.replace('minha', 'sua') // troca (minha) por (sua)
// "minha primeira mensagem"
mensagem.trim() // tira o excesso de ( espaços ) do fim ou inicio

mensagem.split(' '); // quebra a frase em espaços
// 0: "minha"
// 1: "primeira"
// 3: "mensagem"
//length: 3



