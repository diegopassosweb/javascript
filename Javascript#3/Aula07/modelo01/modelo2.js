function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = 22
//var hora = data.getHours()
msg.innerHTML = `Agora sao ${hora} horas.`
if( hora >= 0 && hora < 12) {
    //BOM DIA
    img.src = 'manha.png'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora <= 18) {
    //BOA TARDE
    img.src = 'tarde.png'
    window.document.body.style.background = '#eb9846f'
} else {
    //BOA NOITE
    img.src = 'noite.png'
    window.document.body.style.background = '#515154'
}
}