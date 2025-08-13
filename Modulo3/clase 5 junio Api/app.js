const buscarPokemon =()=>{
    const nombre = document.getElementById("pokemonName").value.toLowerCase();

    const url = "https://pokeapi.co/api/v2/pokemon/"+nombre
    fetch(url)
    .then(response =>{
        if(!response.ok){
            console.log("ocurrio un error")
        }
        return response.json()
    })
    .then(data=>{
        const tipos = data.types.map( t => t.type.name).join(', ')
        document.getElementById("resultado").innerHTML='<h2>'+ data.name.toUpperCase() +'</h2>'+ 
        "<img src='"+ data.sprites.front_default +"'>'" + 
        "<p> <strong> Tipos: " + tipos +"</strong></p>"
    })
   
}

document.getElementById("btnBuscar").addEventListener("click", buscarPokemon)