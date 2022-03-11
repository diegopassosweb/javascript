function carregar() {
    let data = new Date()
    let hora = data.getHours()
    let img = document.getElementById('img')
    let msg = document.getElementById('msg')
    msg.innerHTML = `Agora são exatamente ${hora} horas`
    if( hora >= 0 && hora < 12) {
        // bom dia
        img.src = 'manha.png'
        document.body.style.background = ''
    } else if(hora <= 18) {
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = ''
    } else {
        // boa noite
        img.src = 'noite.png'
        document.body.style.background = ''
    }
}