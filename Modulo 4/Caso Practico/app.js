
const bntMuestraUsuarios = document.getElementById('bntMuestraUsuarios');
const bntEliminarUsuario = document.getElementById('bntEliminarUsuario');
const bntAgregaUsuario = document.getElementById('bntAgregaUsuario');
/**
 * Evento que agrega a un nuevo usuario 
 */
bntAgregaUsuario.addEventListener('click',function(){
    //obtenemos la informacion del formulario 
    const nombre_usuario = document.getElementById('nombre_usuario');
    const apellido_usuario = document.getElementById('apellido_usuario');
    const fecha_nacimiento_usuario = document.getElementById('fecha_nacimiento_usuario');
    const email_usuario = document.getElementById('correo_usuario');
    const telefono_usuario = document.getElementById('telefono_usuario');
    let mensaje_post = document.getElementById('mensaje_post');

    //realizamos la peticion post mandando la informacion a insertar. 
    fetch("http://localhost:3000/usuarios", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        nombre: nombre_usuario.value,
        apellido: apellido_usuario.value,
        fecha_nacimiento: fecha_nacimiento_usuario.value,
        email: email_usuario.value,
        telefono: telefono_usuario.value
        })
    })
    .then(res => res.json())
    .then(data => { //caso exitoso
        mensaje_post.innerHTML= "El usuario fue agregado correctamente";
        console.log("Usuario agregado:", data)
    })
    .catch(err => {//caso no exitoso
        mensaje_post.innerHTML = "El usuario no fue agregado";
        console.error("Error al agregar:", err)
    });
})

/**
 * Evento que muestra a los usuarios.
 */
bntMuestraUsuarios.addEventListener('click', function(){
    const tabla =document.getElementById('tabla_Usuarios');
    fetch("http://localhost:3000/usuarios")
    .then((response) => {
        if (!response.ok) {
        throw new Error(`Error en la respuesta: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        let tabla_usuarios = `<table class="font-poiretone mt-5  border-4 rounded-xl  border-blue-400">
                                <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Fecha de nacimiento</th>
                                <th>Correo</th>
                                <th>Telefono</th>
                                </tr>
                            `
        data.forEach((usuario) => {
            tabla_usuarios += `<tr>
                                    <td>${usuario.id_usuario}</td>
                                    <td>${usuario.nombre}</td>
                                    <td>${usuario.apellido}</td>
                                    <td>${usuario.fecha_nacimiento}</td>
                                    <td>${usuario.email}</td>
                                    <td>${usuario.telefono}</td>
                                </tr>
                                `;   
        });
        tabla_usuarios += `</table>`
        tabla.innerHTML = "";           
        tabla.innerHTML = tabla_usuarios;
    })
    .catch((error) => {
        console.error("Error al consumir la API:", error.message);
    });
})

bntEliminarUsuario.addEventListener('click', function(){
    const id_usuario = document.getElementById('id_usuario').value;
    let mensaje_delete = document.getElementById('mensaje_delete');
    fetch(`http://localhost:3000/usuarios/${id_usuario}`, {
    method: "DELETE"
    })
    .then(res => res.json())
    .then(data =>{
        con
        mensaje_delete.innerHTML = "Usuario eliminado:" + data
        console.log("Usuario eliminado:", data)   
    })
    .catch(err =>{
        mensaje_delete.innerHTML = "Error al eliminar"
        console.error("Error al eliminar:", err)
    }); 
})


