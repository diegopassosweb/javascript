function calcular(n1,n2){
    n1 = parseFloat(document.getElementById('n1').value)
    n2 = parseFloat(document.getElementById('n2').value)
    
    selector = document.getElementById('selector').value

    switch(selector){
        case '+':
            calculo = (n1 + n2)
            document.getElementById('resultado').innerHTML = `O resultado da soma de ${n1} + ${n2} é igual a ${calculo}`
            break

        case '-':
            calculo = (n1 - n2)
            document.getElementById('resultado').innerHTML = `O resultado da subtraçao de ${n1} - ${n2} é igual a ${calculo}`
            break
        
        case '/':
            calculo = Math.round((n1 / n2))
            if(Number.isNaN(calculo)){
                document.getElementById('resultado').innerHTML = `Digite um numero valido!`
            } else {
                document.getElementById('resultado').innerHTML = `O resultado da divisao de ${n1} e ${n2} é ${calculo}`
                break
            }
           
            

    }
}