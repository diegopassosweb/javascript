function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    //let hora = data.getHours()
    let hora = 13
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        // bom dia
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'

    } else if(hora >= 12 && hora < 18){
        // boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        // boa noite
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }

}