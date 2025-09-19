//ejercicio 13 usando javascript vanilla
let botonColor = document.getElementById("boton_colors");
let botonBorder = document.getElementById("boton_borde");
let botonCaja = document.getElementById("boton_caja");
let cajas = document.querySelectorAll(".contenedor_caja");


botonColor.addEventListener("click", function() {
   cajas.forEach(caja => caja.classList.toggle("cajaRoja"));
   cajas.forEach(caja => caja.classList.toggle("cajaVerde"));
});


botonBorder.addEventListener("click", function() {
    cajas.forEach(caja => caja.classList.toggle("cajaRedonda"));
});

botonCaja.addEventListener("click", function() {
    console.log(cajas[0].cloneNode(true))
    let nuevaCaja = cajas[0].cloneNode(true);
    document.getElementById("contenedor_cajas").appendChild(nuevaCaja);
    cajas = document.querySelectorAll(".contenedor_caja");
});


