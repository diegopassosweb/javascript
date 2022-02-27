var agora = new Date()
var hora = agora.getHours()
//var hora = 0
console.log(`Agora são exatamente ${hora} horas.`)
if(hora <= 12 && hora >= 6){
    console.log(`Bom dia!`)
} else if (hora >= 13 && hora <= 18){
        console.log(`Boa tarde!`)
} else if (hora >= 19 && hora <= 23) {
    console.log(`Boa noite!`)
} else {
    console.log('Boa madrugada!')
}
