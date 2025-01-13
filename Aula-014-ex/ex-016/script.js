

function contar() {

    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res')


    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        alert('ERRO! Faltam dados.')
    } else {
        res.innerHTML = 'Contando: <br>'
        
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)

        if (passo <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }

        //Contagem crescente
        if (inicio < fim) {
            for (var c = inicio; c <= fim; c += passo) {
                res.innerHTML += `${c} \u{1f449}`
            }
        //Contagem Regressiva
        } else {
            for (var c = inicio; c >= fim; c -= passo) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
        
    }

}