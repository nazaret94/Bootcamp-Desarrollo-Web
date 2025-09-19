/**
 *EJERCICIO 3.2
 *@author Solis Torres Mariana Nazaret 
 */

/**CLASE RECTANGULO */
class Rectangulo{

    /**PROPIEDADES */
    constructor(ancho, altura){
        this.ancho = ancho
        this.altura = altura
    }
    /**METODOS */
    calculaArea(){
        let area = this.ancho * this.altura;
        return area;
    }

    calculaPerimetro(){
        let perimetro = 2 * (this.ancho + this.altura);
        return perimetro;
     
    }

}
/**INSTANCIA(OBJETO) */
let rectangulo1 = new Rectangulo(30,10);

/**CALCULA AREA Y PERIMETRO */
console.log(rectangulo1.calculaArea());
console.log(rectangulo1.calculaPerimetro());