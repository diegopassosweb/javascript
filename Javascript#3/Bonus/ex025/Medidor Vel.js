// Velocidade maxima de ate 70
// a cada 5km acima do limite voce ganha 1 ponto
// Math.Floor() - pode ser usado para arredondar o menor numero inteiro
// caso pontos maior que 12 -> "Carteira Suspendida"


// verificarVelocidade(85);

// function verificarVelocidade(velocidade) {
//     if(velocidade <= 70)
   
//         console.log('Ok');
//     else { 
//         const pontos = Math.floor (((velocidade - 70) / 5));
//         if( pontos >= 12)
//         console.log('Carteira suspensa!');
//         else
//             console.log('Pontos', pontos);
//     }
//   }

  verificarVelocidade(130);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if(velocidade <= 70)
        console.log('Ok');
    else { 
        const pontos = Math.floor (((velocidade - velocidadeMaxima) / kmPorPonto));
        if( pontos >= 12)
        console.log('Carteira suspensa!');
        else
            console.log('Pontos', pontos);
    }
  }
    
    

