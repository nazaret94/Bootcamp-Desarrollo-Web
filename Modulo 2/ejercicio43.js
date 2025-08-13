/**Declara un array denominado "participantes" con los siguientes nombres:
Elena, Carlos, Javier, Laura, Miguel, Patricia(supongamos que estos son los
participantes en un concurso y sus posiciones actuales) */

let participantes = ["Elena", "Carlos", "Javier", "Laura", "Miguel", "Patricia"];
imprimeParticipantes();
 
/**Laura supera a Javier */
console.log("Laura supera a Javier");
participantes.splice(2,3, "Laura","Javier");
imprimeParticipantes();

/**Patricia es descalificada y se elimina del concurso */
console.log("Patricia es descalificada y se elimina del concurso");
participantes.pop();
imprimeParticipantes();

/**Se incorporan dos nuevos concursantes, Raul y Sofia,
  * situandose detras de Elena y atras de Carlos 
  */
 console.log("Se incorporan dos nuevos concursantes, Raul y Sofia, situandose detras de Elena y atras de Carlos");
participantes.shift();
participantes.unshift("Elena","Raúl","Sofía");
imprimeParticipantes();

/**Una nueva participante, Carmen toma la posición principal en la clasificación */
console.log("Una nueva participante, Carmen toma la posición principal en la clasificación");
participantes.unshift("Carmen");
imprimeParticipantes();

function imprimeParticipantes(){
    console.log("----------------------")
    participantes.forEach(function(participante,index){
    console.log(index+1+".-"+participante);
    });
    console.log("----------------------");
}

/**
 * ITERACIÓN DE ARREGLOS
 */
var biblioteca = [
    {
        autor: 'Bill Gates',
        titulo: 'The Road Ahead',
        estadoLectura:true
    },
    {
        autor: 'Steve Jobs',
        titulo: 'Walter Isaacson',
        estadoLectura:true
    },
    {
        autor:'Suzanne Collins',
        titulo: 'Mockingjay: The Final Book of The Hunger Games',
        estadoLectura: false
    }
];

function muestraInformacionBilioteca(){
    biblioteca.forEach(function(libro){
        let estado = libro.estadoLectura == true ? "Ya fue leido": "No fue leido";
        console.log("Autor: "+libro.autor+", Titulo: "+libro.titulo+", Estado de lectura: "+estado)
    });
}

muestraInformacionBilioteca();
