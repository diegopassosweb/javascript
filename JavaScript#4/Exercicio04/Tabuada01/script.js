function tabuada() {
    let num =  document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0) {
        window.alert('Por favor digite um numero!')
    } else {
        let n = Number(num.value)
        // let c = 1
        // while { c <= 10}
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = ` ${n} x ${c} = ${c*n}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}