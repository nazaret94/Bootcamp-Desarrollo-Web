
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
    $("#loginSection").addClass("hidden");
    $("#registerSection").removeClass("hidden");
});

/**
 * Regresa al inicio
 */
$("#bntBackLogin").on("click", function(){
    $("#registerSection").addClass("hidden");
    $("#loginSection").removeClass("hidden");
});

/**
 * Registrar usuario 
 */
$("#bntRegister").on("click", function(){
    let userName = $("#regUserName").val().trim();
    let password = $("#regPassword").val();
    let age = $("#regAge").val();
    let email = $("#regEmail").val();
    if(!userName || !password || !age || !email){
        $("#registerMsg").css("color","red").text("Completa todos los campos");
        return;
    }
    let users = getUsers();
    if(users.some(u => u.userName === userName)){
        $("#register-msg").css("color","red").text("Usuario ya existe");
        return;
    }

    users.push({ userName, password, age, email });
    saveUsers(users);
    $("#registerMsg").css("color","lightgreen").text("Usuario registrado con éxito");
    $("#regUserName, #regPassword, #regAge, #regEmail").val("");
});

/**
 * Entrar a la pagina 
 */
$("#bntSignIn").on("click",function(){
    let userName = $("#userName").val().trim();
    let password = $("#password").val();

    let users = getUsers();
    let user = users.find(u => u.userName === userName && u.password === password);

    if(user){
        $("#loginRegister").addClass("hidden");
        $("#paginaPrincipal").removeClass("hidden");
        $("#welcome-msg").text(`Bienvenido, ${user.userName}`);
    } else{
        $("#loginError").text("Credenciales inválidas");
    }
});

