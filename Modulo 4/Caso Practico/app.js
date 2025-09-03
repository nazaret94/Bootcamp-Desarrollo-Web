
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
    .then(data => { //se comunico con el api
        if(data.mensaje === undefined){
            mensaje_post.innerHTML= `<p class="walter-turncoat text-red-600 pt-5">El usuario no pudo ser agregado</p>`
        }else{
            mensaje_post.innerHTML= `<p class="walter-turncoat text-green-600 pt-5">Usuario agregado</p>`
        }
    })
    .catch(err => {//caso no exitoso
        mensaje_post.innerHTML = `<p class="walter-turncoat text-red-600 pt-5">El usuario no pudo ser agregado</p>`
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
        let tabla_usuarios = `<table class="cairo xl:text-3xl md:text-xl text-violet-950 mt-5 ">
                                <tr>
                                <th class="p-1 w-20">ID</th>
                                <th class="p-1 w-60">Nombre</th>
                                <th class="p-1 w-60">Apellido</th>
                                <th class="p-1 w-80">Fecha de nacimiento</th>
                                <th class="p-1 w-90">Correo</th>
                                <th class="p-1 w-60">Telefono</th>
                                </tr>
                            `
        data.forEach((usuario) => {
            let fecha_usuario = new Date(usuario.fecha_nacimiento);
            tabla_usuarios += `<tr>
                                    <td class="p-1 w-20 text-center">${usuario.id_usuario}</td>
                                    <td class="p-1 w-60 text-center">${usuario.nombre}</td>
                                    <td class="p-1 w-60 text-center">${usuario.apellido}</td>
                                    <td class="p-1 w-80 text-center">${fecha_usuario.toLocaleDateString()}</td>
                                    <td class="p-1 w-90 text-center">${usuario.email}</td>
                                    <td class="p-1 w-60 text-center">${usuario.telefono}</td>
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
/**
 * Evento que elimina a un usuario por el id
 */
bntEliminarUsuario.addEventListener('click', function(){
    const id_usuario = document.getElementById('id_usuario').value;
    let mensaje_delete = document.getElementById('mensaje_delete');
    fetch(`http://localhost:3000/usuarios/${id_usuario}`, {
    method: "DELETE"
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data.success);
        if(data.success == true){
            mensaje_delete.innerHTML = `<p class="walter-turncoat text-green-600 pt-5">Usuario elimidado</p>`
            console.log("Usuario eliminado:", data)   
        }else{
            mensaje_delete.innerHTML = `<p class="walter-turncoat text-red-600 pt-5">Error al eliminar</p>`
        }
       
    })
    .catch(err =>{
        mensaje_delete.innerHTML = `<p class="walter-turncoat text-red-600 pt-5">Error al eliminar</p>`
        console.error("Error al eliminar:", err)
    }); 
})


