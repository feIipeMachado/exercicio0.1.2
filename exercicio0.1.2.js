function desconto(porcentagem, valor) {
    return ((porcentagem / 100) * valor)
}

function farmacia(valorCompra, convenio, cartao) {
    if (convenio && cartao) {
        let calculo = desconto(15, valorCompra)
        if (calculo > 100) {
            calculo = 100
        }
        valorCompra = valorCompra - calculo
        return valorCompra
    } else if (convenio || cartao) {
        let calculo = desconto(10, valorCompra)
        if (calculo > 100) {
            calculo = 100
        }
        valorCompra = valorCompra - calculo
        return valorCompra
    } else {
        return valorCompra
    }

}

compra1 = farmacia(300, true, true)
compra2 = farmacia(300, true, false)
compra3 = farmacia(300, false, false)
compra4 = farmacia(1500, true, true)
console.log(compra1)
console.log(compra2)
console.log(compra3)
console.log(compra4)