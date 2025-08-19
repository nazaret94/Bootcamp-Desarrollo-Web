//Datos
let numero = 10;
let celsius = 10;
let radio =3;

//llamado de funciones 
SumaPares(numero);
convertirCelsiusAFahrenheit(celsius);
areaCiculo(radio);

function SumaPares(numero){
    let resultado = 0;
    for (let i =0; i<=numero; i++){
        if(i % 2 === 0){
            resultado = resultado + i;
        }
    }
     console.log("La suma de los numeros pares es: " +resultado);    
}

function convertirCelsiusAFahrenheit(celsius){
    let resultado = (celsius * 1.8) +32;
    console.log("El resultado en F es: "+resultado);
}

function areaCiculo(radio){
    let area = Math.PI * (radio * radio);
    console.log("El area el circulo es: "+area);
}