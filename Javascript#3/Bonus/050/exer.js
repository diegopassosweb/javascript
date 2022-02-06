let numeroletra = [1,'A',2,'B',3,'C'];
let outros = numeroletra;
//solucao 1 ???????????????????????
// numeroletra = [];
// console.log(outros);

//soluçao 2 OK RECOMENDAVEL
 numeroletra.length = 0;
 console.log(numeroletra);
 console.log(outros);

//solucao 3 NAO FUNCIONOU
// numeroletra.splice(0,numeroletra.length);
// console.log(numeroletra);
// console.log(outros);

//soluçao 4 NAO É BOA
// while (numeroletra.length > 0){
//     numeroletra.pop();
// }
// console.log(numeroletra);
// console.log(outros);


