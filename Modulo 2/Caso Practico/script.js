//obtenemos todos los botones
const botones = document.querySelectorAll('.calculadora__tecla');
//obtenemos la pantalla donde vamos a mostrar el resultado
const pantalla = document.getElementById('calculadora__resultado');
//declaramos nuestras varibles 
let primerNumero = '';
let operador = '';
let segundoNumero = '';
let resultadoMostrado = false;

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    const valor = boton.textContent;
    // si el usuario oprime 'C' se resetea 
    if (valor === 'C') {
      primerNumero = '';
      operador = '';
      segundoNumero = '';
      pantalla.textContent = '0';
      resultadoMostrado = false;
      return;
    }
    //muestra el resultado
    if (valor === '=') {
      if (primerNumero && operador && segundoNumero) {
        const resultado = calcular(parseFloat(primerNumero), operador, parseFloat(segundoNumero));
        pantalla.textContent = resultado;
        primerNumero = resultado.toString();
        operador = '';
        segundoNumero = '';
        resultadoMostrado = true;
      }
      return;
    }
    // asigna el operador
    if (['+', '-', '*', '/'].includes(valor)) {
      if (primerNumero !== '' && !operador) {
        operador = valor;
      }
      return;
    }

    // Si ya se mostró un resultado y se empieza a escribir número nuevo
    if (resultadoMostrado) {
      primerNumero = '';
      operador = '';
      segundoNumero = '';
      resultadoMostrado = false;
    }

    // Agregar dígito
    if (!operador) {
      primerNumero += valor;
      pantalla.textContent = primerNumero;
    } else {
      segundoNumero += valor;
      pantalla.textContent = segundoNumero;
    }
  });
});
// funcion que ralliza la operacion y regresa el valor.
function calcular(num1, operador, num2) {
  switch (operador) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    case '/': return num2 !== 0 ? num1 / num2 : 'Error';
    default: return 'Error';
  }
}
