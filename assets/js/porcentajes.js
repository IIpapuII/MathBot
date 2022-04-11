function descuento(){
    const valorProducto = parseInt(document.getElementById("inputPrice").value);
    const porcentajeProducto = parseInt(document.getElementById("inputDiscount").value);
    const precioFinal = valorProducto * (100 - porcentajeProducto)/100;
    const descuentoValor = document.getElementById("descuentoValor");
    descuentoValor.innerHTML = ("El precio final con el descuento es de:" + precioFinal);
    return precioFinal;
}
function calcularPrecioConCupon() {
    const valorProducto = parseInt(document.getElementById("inputPrice").value);
    const userCupon = document.getElementById("inputCoupon").value;
    // const cupon = canApplyCoupon();
    const cuponDiscount = getCouponDiscount(userCupon);
    console.log(cuponDiscount);
    const precioFinal = valorProducto * (100 - cuponDiscount)/100;
    const decuentoCupon = document.getElementById("descuentoCupon");
    decuentoCupon.innerHTML = `El precio final con el descuento es de: ${precioFinal}`
}
function canApplyCoupon(c) {
    const coupons = [
        'Promo10',
        'Promo20',
        'Promo30'
    ]
    if (!coupons.includes(c)) {
        const e = document.getElementById('errorCoupon');
        e.innerHTML = 'EL CUPON NO ES VÁLIDO'
        return false;
    }

    return true;
}

function getCouponDiscount(c) {
    switch (c) {
        case 'Promo10':
            return 10;
        case 'Promo20':
            return 20;
        case 'Promo30':
            return 30;
        default:
            return 0;
    }
}