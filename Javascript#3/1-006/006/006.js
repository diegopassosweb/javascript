// criar função somar que retorna a
// soma de todos os multiplos de 3 e 5

// Multiplos de 3
// 3,6,9
// Mutiplos de 5
// 5,10

//Somando os multiplos: 33
// armazenar os multiplos de 3
// armazenar os multiplos de 5
// somar os dois

somar(10);

function somar(limite){
    let soma = 0;
    for(i =0; i <= limite; i++){
        if(i % 3 === 0 || i % 5 === 0)
        soma += i;
    }
    console.log(soma);
}
