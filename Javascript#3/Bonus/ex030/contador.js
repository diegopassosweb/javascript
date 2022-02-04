// exibir(10);
// function exibir(linhas){
//     let padrao = '';
//     for(let linha = 1; linha <= linhas; linha++){
//         padrao += '*';
//         console.log(padrao);
//     }
// }

codigonestado(10);
function codigonestado(linhas){
    for(let linha = 1; linha <= linhas; linha++){
        let padrao = '';
        for(let i = 0; i < linha; i++){
            padrao += '*';
        }
        console.log(padrao);
    }
}

    