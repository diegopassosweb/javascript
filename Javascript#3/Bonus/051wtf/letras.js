const primeiro = ['ABC',{id:1},'DFG','HIJ'];
const segundo = ['kLN', 'MOP', 'QRT','QIJ'];
//primeiro[0].id = 10;

const combinado = primeiro.concat(segundo);
console.log(combinado);

const cortado = combinado.slice();
console.log(cortado);