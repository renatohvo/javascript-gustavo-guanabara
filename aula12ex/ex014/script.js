function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    // var hora = 11
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        msg.innerHTML = `Agora são ${hora} horas. BOM DIA!`
        document.body.style.background = 'blue'
        img.src = 'fotomanha.jpg'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        msg.innerHTML = `Agora são ${hora} horas. BOA TARDE!`
        document.body.style.background = 'orange'
        img.src = 'fototarde.jpg'
    } else {
        // BOA NOITE!
        msg.innerHTML = `Agora são ${hora} horas. BOA NOITE!`
        document.body.style.background = 'black'
        img.src = 'fotonoite.jpg'
    }
}