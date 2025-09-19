class mostrarUsuarios {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    obtenerUsuarios = async () => {
        const lista = document.getElementById("listaUsuarios");
        try {
            const respuesta = await axios.get(this.apiUrl);
            respuesta.data.forEach(usuario => {
                const li = document.createElement("li");
                li.className = "usuarios_item";
                li.textContent = usuario.name;
                lista.appendChild(li);
            });
        } catch (error) {
            console.error("Error al obtener los usuarios:", error);
        }
    };
}

const buscador = new mostrarUsuarios("https://jsonplaceholder.typicode.com/users");
buscador.obtenerUsuarios();  


