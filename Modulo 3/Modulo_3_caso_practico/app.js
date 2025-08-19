/**
 * Carga los usuarios en el localStorage
 */
function getUsers(){
    return JSON.parse(localStorage.getItem("users"))||[];
}

/**
 * Guarda usuarios en localStorage
 */
function saveUsers(users){
    localStorage.setItem("users", JSON.stringify(users));
}

/**
 * Muestra el registro
 */
$("#signUp").on("click", function(){
    //limpiamos los campos del usuario y contraseña
    $("#userName, #password").val("");
    $("#loginError").text("");
    //habilitamos la seccion de agregar usuario 
    $("#loginSection").addClass("hidden");
    $("#registerSection").removeClass("hidden");
});

/**
 * Regresa al inicio
 */
$("#bntBackLogin").on("click", function(){
    //limpiamos los valores del registro 
    $("#regUserName, #regPassword, #regAge, #regEmail").val("");
    $("#registerMsg").text("");
    //habilitamos la seccion del login
    $("#registerSection").addClass("hidden");
    $("#loginSection").removeClass("hidden");
});

/**
 * Registrar usuario 
 */
$("#bntRegister").on("click", function(){
    //obtenemos los datos del formulario
    let userName = $("#regUserName").val().trim();
    let password = $("#regPassword").val();
    let age = $("#regAge").val();
    let email = $("#regEmail").val();
    //validamas que los datos no tengan un v
    // alor null 
    if(!userName || !password || !age || !email){
        $("#registerMsg").css("color","red").text("Complete all fields");
        return;
    }
    let users = getUsers();
    console.log(users);
    if(users.some(u => u.userName === userName)){
        console.log("ya existe")
        $("#registerMsg").css("color","red").text("User already exists");
        return;
    }

    users.push({ userName, password, age, email });
    saveUsers(users);
    $("#registerMsg").css("color","lightgreen").text("User successfully registered");
    $("#regUserName, #regPassword, #regAge, #regEmail").val("");
});

/**
 * Entrar a la pagina 
 */
$("#bntSignIn").on("click",function(){
    //obtenemos el nombre y la contraseña 
    let userName = $("#userName").val().trim();
    let password = $("#password").val();

    //obtenemos todos los usuarios que se han registrado y se encuentran en el storage
    let users = getUsers();
    //buscamos si el nombre y contraseña coisiden con algun usuario 
    let user = users.find(u => u.userName === userName && u.password === password);

    if(user){ // si existe el usuario accede a la pag. principal 
        $("#loginRegister").addClass("hidden");
        $("#mainPage").removeClass("hidden");
        $("#msgWelcome").text(`Welcome, ${user.userName}`);
        //limpiamos los campos del usuario y contraseña
        $("#userName, #password").val("");
        $("#loginError").text("");
    } else{ //si no existe manda un mensaje que las credenciales son invalidas 
        $("#loginError").text("Invalid credentials");
    }
});

/**Salimos de la pagina */
$("#btnLogout").on("click",function(){
    //limpiamos los datos de la sesion 
    $("#result").empty();
    $("#msgWelcome").empty();
    //habilitamos la pag. principal 
    $("#mainPage").addClass("hidden");
    $("#loginRegister").removeClass("hidden");
});

/**
 * Clase Petision GET a una API
 */
class MostrarUsuarios {
    constructor(apiUrl){
        this.apiUrl = apiUrl;
    }

    obtenerUsuarios(){
        $.ajax({ 
            url: this.apiUrl,
            method:"GET"
        })
        .then(respuesta => {
            let tabla = `<table class="font-poiretone mt-5  border-4 rounded-xl  border-blue-400">
                                <tr>
                                <th class=" p-3 border-r-4 border-b-4 border-blue-400 text-xl ">title</th>
                                <th class=" p-3 border-b-4 border-blue-400 text-xl">body</th>
                                </tr>
                            ` 
            respuesta.forEach(usuario =>{
                if(usuario.id <=5){
                    tabla += `<tr><td class=" p-3 border-r-4 border-b-4 border-blue-400">${usuario.title}</td><td class=" p-3 border-b-4 border-blue-400">${usuario.body}</td></tr>`;   
                }
            })
            tabla +=`</table>`
            $("#result").empty();
            $("#result").append(tabla);
        })
        .catch(error => {
            console.error("Error getting users", error);
        });
    }

    insertarUsuario(){
        $.ajax({
            url: this.apiUrl,
            method: "POST",
            contentType: "application/json; charset=UTF-8",
            data: JSON.stringify({
                title: "My new post",
                body: "This is the test content",
                userId: 101
            }), 
            success: function(data){
                $("#result").empty();
                let resultado = `<p class="text-green-600 utilities text-5xl mt-10 mb-5"><strong>POST CREATED</strong></p>
                                <p class="text-green-800 font-poiretone text-3xl"><strong>Body: </strong> ${data.body}</p>
                                <p class="text-green-800 font-poiretone text-3xl"><strong>Id: </strong> ${data.id}</p>
                                <p class="text-green-800 font-poiretone text-3xl"><strong>title: </strong> ${data.title}</p>
                                <p class="text-green-800 font-poiretone text-3xl"><strong>UserId: </strong> ${data.userId}</p>
                                `
                $("#result").append(resultado);
                console.log("Post creado:", data);
            },
            error: function(e){
                console.error("Error creating post", e);
            }
        }); 
    }
}

/**
 * Botón Petision GET a una API
 */

$("#btnGetData").on("click", function(){
    const buscador = new MostrarUsuarios("https://jsonplaceholder.typicode.com/posts");
    buscador.obtenerUsuarios();
})

/**
 * Botón Petision POST a una API
 */

$("#btnPostData").on("click", function(){
    const buscador = new MostrarUsuarios("https://jsonplaceholder.typicode.com/posts");
    buscador.insertarUsuario();
})

