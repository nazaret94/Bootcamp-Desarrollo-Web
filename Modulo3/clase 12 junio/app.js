const obtenerPersonajes = async () => {
    try{
        console.log("Obtengamos a los personajes de los Simpson")
        //peticion al api
        const respuesta = await fetch("https://thesimpsonsapi.com/api/characters") 
        //se valida que la respuesta sea correcta
        if(!respuesta.ok){
            throw new Error("Ocurrio un error")
        }
        //preparo la respuesta del api para leerla
        const usuarios = await respuesta.json()
        console.log("tus personajes son: ", usuarios)
    }
    catch(error){
        console.error(error)
    }
}

obtenerPersonajes();