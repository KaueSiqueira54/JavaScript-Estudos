
function tabuada() {
    let num = document.getElementById('n')
    let tab = document.getElementById('tab')

    if (num.value.length == 0) {
        alert('ERRO! Por favor, digite um número.')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''

        for (n; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`
            
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }

}