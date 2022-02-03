// Exercicio Nota Escolar
// Obter a media a partir de um array

// 0-59; F
// 60-69; D
// 70-79; C
// 80-89; D
// 90-100; A
// const array = [70,70,80];
// // 73.33

// console.log(mediaAluno(array));

// function mediaAluno(notas){
//     let = soma = 0;
//     for(let nota of notas) {
//         soma += nota;
//     }
//     const media = soma/(notas.length);

//     if (media < 59) return 'F';
//     if (media < 69) return 'D';
//     if (media < 79) return 'C';
//     if (media < 89) return 'D';
//      return 'A';


                                             // if(media >= 0 && media <= 59)
                                            //    return 'F';
//}

const array = [70,70,80];

console.log(mediaAluno(array));

function mediaAluno(notas){
    const media = calcularMedia(notas);

    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'D';
     return 'A';
}

function calcularMedia(array){
    let soma = 0;
    for (let valor of array) {
        soma += valor;
    }
    return soma / (array.length);
}