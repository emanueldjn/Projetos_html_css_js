function carregar() {
    let msg = document.getElementById("msg")
    let imagem = document.getElementById("imagem")
    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        imagem.src = "img/fotomanha.png"
        document.body.style.background = "#e2cd9f"
    } else if (hora >= 12 && hora <= 18) {
        imagem.src = "img/fototarde.png"
        document.body.style.background = "#b97a5d" 
    } else {
        imagem.src = "img/fotonoite.png"
        document.body.style.background = "#515154"

    }
}