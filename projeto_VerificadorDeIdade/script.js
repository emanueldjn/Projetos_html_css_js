function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ""

        let img = document.createElement("img")
        img.setAttribute("id", "foto")

        if (fsex[0].checked) {
            genero = "Homem"
            
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "img/bebe_homem.png")
                
            } else if (idade <= 25) {
                // jovem
                img.setAttribute("src", "img/homem_jovem.png")
            } else if (idade < 50) {
                // adulto
                img.setAttribute("src", "img/homem_adulto.png")
            } else {
                // Idoso
                img.setAttribute("src", "img/idoso.png")
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"

            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute("src", "img/bebe_mulher.png")
            } else if (idade <= 25) {
                // jovem
                img.setAttribute("src", "img/mulher_jovem.png")
            } else if (idade < 50) {
                // adulto
                img.setAttribute("src", "img/mulher_adulta.png")
            } else {
                // Idoso
                img.setAttribute("src", "img/idosa.png")
            }
        }

        img.style.width = "300px"
        img.style.height = "300px"
        img.style.borderRadius = "50%"

        res.style.textAlign =  'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}