// REGISTRO DE CALIFICACIONES 
console.log("REGISTRO DE CALIFICACIONES ");
//creamos el arreglo
let calificaciones = [];

//Simulamos el ingreso de las calificaciones de los 5 alumnos 
for(let i=0;i<5;i++){
    calificaciones[i] = 5 + i;
}
// mostromos las calificaciones
console.log("Las calificaciones son las siguentes: ");
for(let i=0; i<5;i++){
console.log("El alumno numero " +i+" tiene una calificacion de: "+calificaciones[i]);
}

//promedio de calificaciones 
promedioCalificaciones(calificaciones);

//simulacion de la modificacion de un alumno 
let alumno = 2;
let calificacion = 10;
modificacionDeCalificacion(alumno,calificacion);

function modificacionDeCalificacion(alumno, calificacion){
    calificaciones[alumno] = calificacion;
    console.log("Las calificaciones modificadas: ");
    for(let i=0; i<5;i++){
    console.log("El alumno numero " +i+" tiene una calificacion de: "+calificaciones[i]);
    }    
}

function promedioCalificaciones(calificaciones){
    let suma=0;
    let promedio=0;
    for(let i=0;i<5;i++){
        suma= suma + calificaciones[i]; 
    }
    promedio = suma/ calificaciones.length;
    console.log("promedio de las calificaciones es: "+promedio);
}