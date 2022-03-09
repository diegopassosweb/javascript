
let corante = '100mg de corante azul';

//ARRAY
let ingredientes = [
    '2 xicares de (cha) de açucar',
    '2 xicares de (cha) de farinha de trigo',
    '4 colheres (sopa) de margarina',
    '3 ovos',
    '1 e 1/2 xicaras de (cha) de leite',
    '1 colher de (sopa) bem cheia de fermento em pó',
    corante,
    'agua',
];

for(let i = 0; i< ingredientes.length; i++ ) {
    let lihtml = '<lI> ' + ingredientes[i] + '</li>';
    document.querySelector('ul').innerHTML += lihtml;
}