class MostrarUsuariosJquery {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    obtenerUsuarios() {
        $.ajax({
            url: this.apiUrl,
            method: "GET"
        })
        .then(data => {
            data.forEach(usuario => {
                const li = `<li class="usuarios_item">${usuario.name}</li>`;
                $("#listaUsuarios").append(li);
            });
        })
        .catch(error => {
            console.error("Error al obtener los usuarios:", error);
        });
    }
}

$(document).ready(function () {
    const buscadorJquery = new MostrarUsuariosJquery("https://jsonplaceholder.typicode.com/users");
    buscadorJquery.obtenerUsuarios();
});