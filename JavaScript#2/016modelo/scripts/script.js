let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;
let numero = '';

function comecarEtapa() {
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';

    for(let i=0;i<etapa.numeros;i++){
        if(i === 0){
            numeroHtml += '<div class="numero pisca"></div>';
        }
        numeroHtml += '<div class="numero"></div>';
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;

}
function atualizaInterface(){
  let etapa = etapa[etapaAtual];
  let candidato = etapa.candidato.filter((item)=>)
}

function clicou(n) {
    let elnumero = document.querySelector('.numero.pisca');
    if(elnumero !== null){
        elnumero.innerHTML = n;
        numero = `${numero}${n}`;

        elnumero.classList.remove('pisca');
        if(elnumero.nextElementSibling !== null){
            elnumero.nextElementSibling.classList.add('pisca');
        } else {
            atualizaInterface();
        }
    }
}
function branco(){
    alert("Clicou em BRANCO!");
}
function corrige(){
    alert("Clicou em CORRIGE!");
}
function confirma(){
    alert("Clicou em CONFIRMA!");
}

comecarEtapa();