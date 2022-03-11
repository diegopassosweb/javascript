function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        let genero = ''
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if(idade < 51) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if(idade < 51) {
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}