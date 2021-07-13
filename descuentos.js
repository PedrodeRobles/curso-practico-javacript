// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;

    return precioConDescuento;
}

//Funciones para conectar con html

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");

    const valuePrice = inputPrice.value;
    const valueDiscount = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(valuePrice, valueDiscount);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}





// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioDescuento,
//     precioConDescuento,
// });
