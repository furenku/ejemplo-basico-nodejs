const moment = require("moment")

function generarTextoHora() {

    const hora = moment().format("hh:mm:ss")

    const mensaje = `La hora es: ${ hora }`

    return mensaje

}

function mostrarHora() {
    const texto = generarTextoHora()
    console.log( texto )
}

module.exports = {
    generarTextoHora,
    mostrarHora
}