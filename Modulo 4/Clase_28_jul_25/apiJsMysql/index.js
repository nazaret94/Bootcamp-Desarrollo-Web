const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "compras2",
});

connection.connect((error) => {
  if (error) {
    console.error("Error al conectar a MySQL:", error);
    process.exit(1);
  }
  console.log("Conexión a MySQL establecida");
});

app.get("/", (req, res) => {
  res.send("API de Categorías funcionando");
});

app.get("/categorias", (req, res) => {
  connection.query("CALL sp_s_obtenerCategorias()", (err, results) => {
    if (err) {
      console.error("Error al obtener categorías:", err);
      return res.status(500).json({ error: "Error al obtener categorías" });
    }

    if (!results || !results[0]) {
      return res.status(500).json({ error: "No se encontraron resultados" });
    }

    res.json(results[0]);
  });
});

app.listen(PORT, () => console.log(`Servidor activo en el puerto ${PORT}`));
