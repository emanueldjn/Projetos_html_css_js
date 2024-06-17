function calcular() {
    let txtvel = document.getElementById("txtvel")
    let res = document.getElementById("res")
    let vel = Number(txtvel.value) 
    res.innerHTML = `<p> Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`

    if (vel > 60) {
        res.innerHTML += `Você esta <strong>MULTADO</strong> por execesso de velocidade!`
    } else {
        res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
    }
}