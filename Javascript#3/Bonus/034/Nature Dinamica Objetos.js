// Nature dinamica de Objetos

const mouse = {
    cor: 'red',
    marca: 'dazz'
}
mouse.velocidade = 500;
mouse.trocadorDPI = function() {
    console.log('mudando DPI');
}
delete mouse.velocidade;
delete mouse.trocadorDPI;
console.log(mouse);
