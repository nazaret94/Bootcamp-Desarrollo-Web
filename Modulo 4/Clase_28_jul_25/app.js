fetch("http://localhost:3000/categorias")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error en la respuesta: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    data.forEach((cat) => console.log(cat));
  })
  .catch((error) => {
    console.error("Error al consumir la API:", error.message);
  });

  