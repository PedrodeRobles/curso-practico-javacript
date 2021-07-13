// const precioOriginal = 120;
// const descuento = 18;

const coupons = [
    "cupon1",
    "cupon2",
    "cupon3",
]

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;

    return precioConDescuento;
}

//Funciones para conectar con html

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const valuePrice = inputPrice.value;

    // const inputDiscount = document.getElementById("InputDiscount");
    // const valueDiscount = inputDiscount.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const valueCoupon = inputCoupon.value;

    let descuento;

    switch(valueCoupon) {
        case "cupon1":
            descuento = 15;
        break;    
        case "cupon2":
            descuento = 30;
        break;    
        case "cupon3":
            descuento = 25;    
        break;    
    }
    
    
    const precioConDescuento = calcularPrecioConDescuento(valuePrice, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El descuento es de " + descuento + "% y el precio con descuento son: $" + precioConDescuento;
}









// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioDescuento,
//     precioConDescuento,
// });
