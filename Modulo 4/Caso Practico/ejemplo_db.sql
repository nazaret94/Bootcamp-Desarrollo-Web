/**
 * Author: Solis Torres Mariana Nazaret
 * Caso Practico 
 */
-- CREACION DE LA BASE DE DATOS
CREATE DATABASE IF NOT EXISTS ejemplo_db;
USE ejemplo_db;

-- CREACION DE LA TABLA USUARIOS
CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100),
    fecha_nacimiento DATE,
    email VARCHAR(255) UNIQUE NOT NULL,
	telefono VARCHAR(20)
);

-- INSERTAMOS UN USUARIO 
INSERT INTO usuarios (nombre, apellido, fecha_nacimiento, email, telefono)
VALUES ('Mariana', 'Solis', '1994-02-02', 'z.areth94@hotmail.com', '5577232123');

-- CHECAMOS QUE EL REGISTRO FUE GUSRDADO
select * from usuarios