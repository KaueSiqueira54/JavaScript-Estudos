

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()


    
    msg.innerHTML = `Agora são ${hora} hrs.`

    if (hora >= 0 && hora < 12) {
        img.src = 'fotos/foto-manha.jpg'
        document.body.style.backgroundColor = '#916A68'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fotos/foto-tarde.jpg'
        document.body.style.backgroundColor = '#3396D9'
    } else {
        img.src = 'fotos/foto-noite.jpg'
        document.body.style.backgroundColor = '#9F4F14'
    }
}
