
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

const convertirAPesos = (numero) => {

    const valorTransformado =  new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
    }).format(numero)

    return valorTransformado
}

export default convertirAPesos