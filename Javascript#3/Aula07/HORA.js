var agora = new Date()
var hora = agora.getHours()
//var hora = 6
console.log(`Agora sao exatamente ${hora} horas`)
if (hora >= 6) {
    console.log('Bom dia!')
}else if (hora >= 12 && hora <= 18) {
    console.log('Boa tarde!')
 } else if (hora >= 19) {
     console.log(`Boa noite!`) 
 } else {
     console.log('Boa madrugada!')
 }
 
 
 