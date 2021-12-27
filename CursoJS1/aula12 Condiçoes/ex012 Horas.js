var agora = new Date()
var hora = agora.getHours()
//var hora = 4
console.log(`Agora sao exatamente ${hora} horas`)
if (hora < 5) {
    console.log(`Boa madrugada!`)
}
else if (hora < 12 ) {
    console.log(`Bom dia!`)
} 
else if (hora <= 18) {
    console.log(`Boa tarde!`)
} 
else {
    console.log(`Boa Noite!`)
}









