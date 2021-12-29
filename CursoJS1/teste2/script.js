function carregar() {

    var img = window.document.getElementById('imagem')
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`
    
    if(minuto < 10) {
        minuto = "0" + minuto
    }

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    }
    else if ( hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    }else {
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
    
}
