class buscarPersonaje{
    constructor(apiUrl){
        this.apiUrl = apiUrl;
    }
    buscar(nombre){
        console.log(nombre);
        fetch(this.apiUrl)
            .then(response => {
                if(!response.ok){
                    throw new Error("Ocurrio un error")
                }
                return response.json();
            })
            .then(data =>{
                //Se obtiene el personaje 
                const personaje = data.results.find(p => p.name.toUpperCase() === nombre.toUpperCase());
               //obtenemos la informacion necesaria 
                const nombrep = personaje.name
                const edad = personaje.age 
                const genero = personaje.gender
                const cumpleaños = personaje.birthdate
                const foto = `https://cdn.thesimpsonsapi.com/500${personaje.portrait_path}`;
                const frase = personaje.phrases[0] || "Sin frase";
                // colocamos la imagen 
                document.getElementById("resultado_img").innerHTML = `<img class="personaje_img" src="${foto}" alt"${nombrep}">`
                // colocamos la informacion del personaje
                document.getElementById("resultado_info").innerHTML = 
                `
                <p id="nombre_personaje"><strong>Name:</strong> ${nombrep}<p>
                <p class="info"><strong>Birthday:</strong> ${cumpleaños}<p>
                <p class="info"><strong>Gender:</strong> ${genero}<p>
                <p class="info"><strong>Age:</strong> ${edad}<p>
                <p id="frase_personaje"><strong>Phrase:</strong> ${frase}<p>
                `
            })
            .catch(error => {
                console.log(error);
                document.getElementById("contenedor_resultado").innerHTML = `<p class="error_personaje">Error al buscar el personaje</p>`
            })
    }

}

const buscador = new buscarPersonaje("https://thesimpsonsapi.com/api/characters");

document.getElementById("btnBuscar").addEventListener("click", ()=>{
    const nombre = document.getElementById("personaje").value;
    buscador.buscar(nombre);
})