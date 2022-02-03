function isString(inputText) {
    if(typeof inputText === 'string' || inputText instanceof String){
        //É uma string
        return true;
    } else {
        //Nao é uma string
        return false;
    }
}
function isNumber(inputText){
    if(typeof inputText === 'number' || inputText instanceof Number) {
        //É um numero
        return true;
    } else {
        //Nao é um numero
        return false;
    }
}

var textOne = 'Programador'
console.log('Digite algo: '+textOne)



//var textTwo = new String('Hello String Two');
//var Programador = true;

console.log('Programador é uma string? ' +isString(textOne));
console.log('Programador é um numero? '+isNumber(textOne));
//console.log('O tipo primitivo desse valor é '+tipo(textOne));
//console.log('Só tem espaços? '+espaco(textOne))
//console.log('textTwo é uma string ?'+isString(textTwo));
//console.log('Programador nao é uma String ? '+isString(Programador));
