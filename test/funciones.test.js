const { generarTextoHora } = require("../funciones")

const moment = require("moment")


describe("Funciones", ()=>{

    test("Texto de hora se genera correctamente", ()=>{

        const hora = moment().format("hh:mm:ss")

        const texto = generarTextoHora()

        expect( texto ).toBe( `La hora es: ${hora}` )
    
    })

})