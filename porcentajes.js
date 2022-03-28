function descuento (){
    const valorProducto = document.getElementById("valorProducto").value;
    const porcentajeProducto = document.getElementById("porcentajeProducto").value;

    const precioFinal = valorProducto * (100 - porcentajeProducto)/100;
    const descuentoValor = document.getElementById("descuentoValor");
    descuentoValor.innerHTML = ("El precio final con el descuento es de:" + precioFinal + (" COP"));
    return precioFinal;
    
}