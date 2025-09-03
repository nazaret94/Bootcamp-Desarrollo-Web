const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ejemplo_db",
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

app.get("/usuarios", (req, res) => {
    connection.query('SELECT * FROM usuarios', (error, resultados, campos) => {
        if (error) {
            console.error('Error al ejecutar la consulta: ', error);
            res.status(500).json({ error: 'Error en la consulta' });
            return;
        }
        console.log('Resultados de la consulta: ', resultados);
        res.status(200).json(resultados); // ← Aquí envías los datos al cliente
    });
});

app.post("/usuarios", (req, res) => {
    const { nombre, apellido, fecha_nacimiento, email, telefono } = req.body;
    const query = `INSERT INTO usuarios (nombre, apellido, fecha_nacimiento, email, telefono) VALUES (?, ?, ?, ?, ?)`;
    connection.query(query, [nombre, apellido, fecha_nacimiento, email, telefono], (error, resultado) => {
        if (error) {
        console.error("Error al insertar usuario:", error);
        res.status(500).json({ error: "No se pudo agregar el usuario" });
        return;
        }
        res.status(201).json({ mensaje: "Usuario agregado correctamente", id: resultado.insertId });
    });
});

app.delete("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    connection.query("DELETE FROM usuarios WHERE id_usuario = ?", [id], (error, resultado) => {
        if (error) {
        console.error("Error al eliminar usuario:", error);
        res.status(500).json({ error: "No se pudo eliminar el usuario" });
        return;
        }
        if (resultado.affectedRows === 0) {
        res.status(404).json({ mensaje: "Usuario no encontrado" });
        } else {
        res.status(200).json({ mensaje: "Usuario eliminado correctamente" });
        }
    });
});

app.listen(PORT, () => console.log(`Servidor activo en el puerto ${PORT}`));
