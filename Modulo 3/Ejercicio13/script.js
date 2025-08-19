//Ejercicio 13 usando jquery
let botonColor = $("#boton_colors");
let botonBorder = $("#boton_borde");
let botonCaja = $("#boton_caja");
let cajas = $(".contenedor_caja");

botonColor.on("click", function() {
    cajas.hasClass("cajaRoja") ? cajas.removeClass("cajaRoja") : cajas.addClass("cajaRoja");
    cajas.hasClass("cajaVerde") ? cajas.removeClass("cajaVerde") : cajas.addClass("cajaVerde");
});

botonBorder.on("click", function() {
    cajas.hasClass("cajaRedonda") ? cajas.removeClass("cajaRedonda") : cajas.addClass("cajaRedonda");
});

botonCaja.on("click", function() {
    let nuevaCaja =$(cajas[0]).clone();
    nuevaCaja.appendTo("#contenedor_cajas");
    cajas = $(".contenedor_caja");
});


