function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    // let hora = data.getHours()
    let hora = 19
    msg.innerHTML = `Agora são exatamente ${hora} horas`

    if(hora >= 0 && hora <= 12) {
        img.src = 'manha.png'
        document.body.style.background = ''
    } else if(hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = ''
    } else {
        img.src = 'noite.png'
        document.body.style.background = ''
    }
}