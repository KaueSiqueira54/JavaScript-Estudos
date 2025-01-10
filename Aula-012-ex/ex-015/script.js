
function verificar() {
    
    var data = new Date()
    var ano = data.getFullYear()

    var fAno = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert("Verifique os dados e tente novamente!")
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)

        var genero = ''
        
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'fotos/bebe-homem.jpg')
            } else if (idade <= 21) {
                //jovem
                img.setAttribute('src', 'fotos/homem.jpg')
            } else if (idade <= 50) {
                //adulto
                img.setAttribute('src', 'fotos/adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'fotos/idoso.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade <=10) {
                //criança
                img.setAttribute('src', 'fotos/bebe-mulher.jpg')
            } else if (idade <= 21) {
                //jovem
                img.setAttribute('src', 'fotos/mulher.jpg')
            } else if (idade <= 50) {
                //adulto
                img.setAttribute('src', 'fotos/mulher-adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'fotos/idosa.jpg')
            }
        }

        res.style.textAlign = 'center'

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}