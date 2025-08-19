const obtenerPokemon=(nombrePokemon)=>{
    const promesa = new Promise((resolve, reject)=>{
        fetch('https:/pokeapi.co/api/v2/pokemon/'+ nombrePokemon)
        .then( response=>{
            if(!response.ok){
                reject('No se pudo consultar el pokemon')
            }
            else{
                return response.json()
            }
        })
        .then( datos => resolve(datos))
        .catch(error => reject(error));
    })

    promesa
    .then(insformacionPokemon => {
        console.log('Nombre: ', insformacionPokemon.name)
        console.log('Id: ', insformacionPokemon.id)
        console.log('Altura: ', insformacionPokemon.height)
        console.log('Peso: ',insformacionPokemon.weight)
    })
    .catch( error => console.log("Error", error))
}

obtenerPokemon('pikachu')