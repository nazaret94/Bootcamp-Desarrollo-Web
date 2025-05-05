/*
function calculadora(operacion, numero1, numero2) {
  // Declarar variable de salida

  let resultado = 0;
  // de acuedo a la operacion vamos a realizar el calculo
  if (operacion == "+") {
    resultado = suma(numero1, numero2);
  } else if (operacion == "-") {
    resultado = resta(numero1, numero2);
  } else if (operacion == "*") {
    resultado = multiplicacion(numero1, numero2);
  } else if (operacion == "/") {
    resultado = divicion(numero1, numero2);
  } else {
    return console.error("Operación no soportada");
  }

  return resultado;
}

function suma(numero1, numero2) {
  return numero1 + numero2;
}

function resta(numero1, numero2) {
  return numero1 - numero2;
}

function multiplicacion(numero1, numero2) {
  return numero1 * numero2;
}

function divicion(numero1, numero2) {
  return numero1 / numero2;
}

let resultadoOperacion = calculadora("¡", 10, 5);
if (resultadoOperacion != undefined)
  console.log("El resultado de la operación es:", resultadoOperacion);
else resultadoOperacion;
*/

let arreglo = [
  1, 2, 3, 6, 7, 23, 4, 5, 2, 4, 5, 2, 43, 5, 6, 8, 234, 876, 234, 3, 536, 23,
  0,
];

// // inicializacion contador; expreción a evaluar; incremento del contador
// for (let contador = 0; contador < arreglo.length; contador++) {
//   for (
//     let contadorInterno = 0;
//     contadorInterno < arreglo.length;
//     contadorInterno++
//   ) {
//     if (arreglo[contadorInterno] > arreglo[contadorInterno + 1]) {
//       let auxiliar = arreglo[contadorInterno];
//       arreglo[contadorInterno] = arreglo[contadorInterno + 1];
//       arreglo[contadorInterno + 1] = auxiliar;
//     }
//   }
//   console.log(arreglo[contador]);
// }

// funciones se van a llevar paentesisi para sus atributos
// calculara(operacion, numero1, numero2)

let nombres = [
  "Ana",
  "Juan",
  "Maria",
  "Pedro",
  "Pablo",
  "Joaquin",
  "Aurora",
  "Alexander",
  "Tadeo",
  "Karen",
];

for (let i = 0; i < nombres.length; i++) {
  if (nombres[i].length > 4) {
    console.log(
      "El nombre: ",
      nombres[i],
      " tiene un total de ",
      nombres[i].length,
      " letras y si cumple"
    );
  } else {
    console.log(
      "El nombre: ",
      nombres[i],
      " tiene un total de ",
      nombres[i].length,
      " letras y no cumple"
    );
  }
}
