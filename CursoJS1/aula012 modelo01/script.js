function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
//var hora

if (minuto < 10){
    minuto = "0" + minuto
}

msg.innerHTML = ` Bom dia! agora são ${hora}horas e ${minuto} minutos`
if (hora >= 0 && hora < 12) {
            //BOM DIA
    img.src = 'fotomanha.png'
    document.body.style.background = '#e2cd9f'

}else if (hora >= 12 && hora <= 18){
    msg.innerHTML = ` Boa tarde! agora são ${hora} horas e ${minuto} minutos`
    img.src = 'fototarde.png'
            //BOA TARDE
    foto.src='tarde.png' 
    document.body.style.background = '#b9846f' 

}else {
    msg.innerHTML = ` Boa Noite! agora são ${hora}horas e ${minuto} minutos`
            //BOA NOITE
    img.src = 'fotonoite.png'
    document.body.style.background = '#515154'
    

}}