let valores = [8,3,2,1,5]
console.log(valores)

// for(let pos = 0; pos < valores.length; pos++){
//     console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
// }

for(let pos in valores){
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
}
