function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('flista')
    if(num.value.length == 0) {
        window.alert('Por favor digite um numero!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = ` ${c} x ${n} = ${n*c}`
            tab.appendChild(item)
            item.value = ` tab${c}`
        }
    }
}