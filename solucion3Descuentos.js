const coupons = [
    {
        name: "cupon1",
        discount: 15,
    },
    {
        name: "cupon2",
        discount: 30,
    },
    {
        name: "cupon3",
        discount: 25,
    },
];


//Funcion principal para porcentajes
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;

    return precioConDescuento;
}



//Funciones para conectar con html
function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const valuePrice = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const valueCoupon = inputCoupon.value;

    const isCouponValueValid = function (coupon) {
        return coupon.name === valueCoupon;    //define el valor que ingresaste como un name que esta en el objeto, puede coincidir con los que exixten o no
    };
    
    const userCoupon = coupons.find(isCouponValueValid);  //Aca busca si el name que ingresaste esta dentro de la lista de obejtos
    
    
    if (!userCoupon) {    //El name no se encunta en las lista de objetos entonces...
        alert("El cupón " + valueCoupon + " no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(valuePrice, descuento);
    
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
    
}
