// Clase para buscar al personaje
class HPCharacterSearcher {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    buscar(nombre) {
        fetch(this.apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Ocurrió un error");
                }
                return response.json();
            })
            .then(data => {
                const personaje = data.find(p => p.name.toUpperCase() === nombre.toUpperCase());
                if (personaje) {
                    document.getElementById("resultado").innerHTML =
                        "<h2>" + personaje.name.toUpperCase() + "</h2>" +
                        "<img src='" + personaje.image + "' alt='" + personaje.name + "' width='200'>" +
                        "<p><strong>Casa:</strong> " + (personaje.house || "Desconocida") + "</p>" +
                        "<p><strong>Actor:</strong> " + (personaje.actor || "Desconocido") + "</p>" +
                        "<p><strong>Especie:</strong> " + (personaje.species || "Desconocido") + "</p>";

                    // Usamos Web API setTimeout para mostrar un mensaje luego de 2 segundos
                    setTimeout(() => { console.log("🔔 Datos del personaje mostrados con éxito.");}, 2000);
                } else {
                    document.getElementById("resultado").innerHTML = "<p>No se encontró el personaje.</p>";
                }
            })
            .catch(error => {
                console.error(error);
                document.getElementById("resultado").innerHTML = "<p>Error al buscar personaje.</p>";
            });
    }
}

// Instanciamos la clase con la URL de la API
const buscador = new HPCharacterSearcher("https://hp-api.onrender.com/api/characters");

// Asociamos el evento al botón
document.getElementById("btnBuscar").addEventListener("click", () => {
    const nombre = document.getElementById("personajeHP").value;
    buscador.buscar(nombre);
});