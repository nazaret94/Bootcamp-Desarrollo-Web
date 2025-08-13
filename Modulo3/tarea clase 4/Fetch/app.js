class MostrarUsuariosFetch {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async obtenerUsuarios() {
        const lista = document.getElementById("listaUsuarios");
        try {
            const respuesta = await fetch(this.apiUrl);
            const data = await respuesta.json();
            data.forEach(usuario => {
                const li = document.createElement("li");
                li.className = "usuarios_item";
                li.textContent = usuario.name;
                lista.appendChild(li);
            });
        } catch (error) {
            console.error("Error al obtener los usuarios:", error);
        }
    }
}

const buscadorFetch = new MostrarUsuariosFetch("https://jsonplaceholder.typicode.com/users");
buscadorFetch.obtenerUsuarios();