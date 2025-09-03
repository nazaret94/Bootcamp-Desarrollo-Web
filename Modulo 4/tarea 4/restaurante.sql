/**
 * Author: Solis Torres Mariana Nazaret
 * Ejercicio 4.3
 */
 
-- Se crea la base de datos
CREATE DATABASE IF NOT EXISTS restaurante;
USE restaurante;

-- Se crea la tabla Categoría
CREATE TABLE categoria (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    encargado VARCHAR(100)
);

-- Se crea la tabla: Plato
CREATE TABLE plato (
    id_plato INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    dificultad VARCHAR(50),
    foto VARCHAR(255),
    precio DECIMAL(6,2),
    id_categoria INT,
    FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria)
);

-- Se crea la tabla Receta
CREATE TABLE receta (
    id_receta INT AUTO_INCREMENT PRIMARY KEY,
    id_plato INT UNIQUE,
    FOREIGN KEY (id_plato) REFERENCES plato(id_plato)
);

-- Se crea la tabla Ingrediente
CREATE TABLE ingrediente (
    id_ingrediente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    stock_actual DECIMAL(6,2)
);

-- Se crea la tabla Detalle de Receta (relación receta-ingredientes)
CREATE TABLE detalle_receta (
    id_receta INT,
    id_ingrediente INT,
    cantidad DECIMAL(6,2),
    unidad_medida VARCHAR(50),
     PRIMARY KEY (id_receta, id_ingrediente),
    FOREIGN KEY (id_receta) REFERENCES receta(id_receta),
    FOREIGN KEY (id_ingrediente) REFERENCES ingrediente(id_ingrediente)
);

-- Se insertan 10 valores a la tabla Categoría
INSERT INTO categoria (nombre, descripcion, encargado) VALUES
('Entradas', 'Platos ligeros para comenzar', 'Laura'),
('Platos Fuertes', 'Comidas principales', 'Carlos'),
('Postres', 'Dulces y delicias', 'Ana'),
('Bebidas', 'Refrescos y cócteles', 'Luis'),
('Vegano', 'Opciones sin productos animales', 'Sofía'),
('Infantil', 'Platos para niños', 'Mario'),
('Mariscos', 'Platos con productos del mar', 'Elena'),
('Carnes', 'Preparaciones con carne roja', 'Pedro'),
('Internacional', 'Comida de otros países', 'Lucía'),
('Especiales', 'Platos del día o temporada', 'Jorge');

-- Se insertan 10 valores a la tabla Plato
INSERT INTO plato (nombre, descripcion, dificultad, foto, precio, id_categoria) VALUES
('Ensalada César', 'Lechuga, pollo y aderezo', 'Fácil', 'cesar.jpg', 120.00, 1),
('Spaghetti Bolognesa', 'Pasta con salsa de carne', 'Media', 'spaghetti.jpg', 180.00, 2),
('Tarta de Manzana', 'Postre clásico', 'Media', 'tarta.jpg', 90.00, 3),
('Mojito', 'Cóctel refrescante', 'Fácil', 'mojito.jpg', 75.00, 4),
('Hamburguesa Vegana', 'Con lentejas y vegetales', 'Media', 'vegana.jpg', 150.00, 5),
('Nuggets de Pollo', 'Para niños', 'Fácil', 'nuggets.jpg', 100.00, 6),
('Camarones al Ajillo', 'Mariscos salteados', 'Difícil', 'camarones.jpg', 220.00, 7),
('Filete de Res', 'Carne a la parrilla', 'Media', 'filete.jpg', 250.00, 8),
('Sushi', 'Rollos japoneses', 'Difícil', 'sushi.jpg', 200.00, 9),
('Paella', 'Arroz con mariscos', 'Difícil', 'paella.jpg', 230.00, 10);

-- Se insertan 10 valores a la tabla Receta
INSERT INTO receta (id_plato) VALUES
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10);

-- Se insertan 10 valores a la tabla Ingrediente
INSERT INTO ingrediente (nombre, stock_actual) VALUES
('Lechuga', 50.00),
('Pollo', 40.00),
('Pasta', 60.00),
('Carne Molida', 35.00),
('Manzana', 25.00),
('Ron', 20.00),
('Lentejas', 45.00),
('Pan', 30.00),
('Camarones', 20.00),
('Arroz', 70.00);

-- Se insertan 10 valores a la tabla Detalle de Receta
INSERT INTO detalle_receta (id_receta, id_ingrediente, cantidad, unidad_medida) VALUES
(1, 1, 100.00, 'g'),
(1, 2, 150.00, 'g'),
(2, 3, 200.00, 'g'),
(2, 4, 100.00, 'g'),
(3, 5, 2.00, 'unidad'),
(4, 6, 50.00, 'ml'),
(5, 7, 100.00, 'g'),
(6, 8, 1.00, 'unidad'),
(7, 9, 150.00, 'g'),
(10, 10, 200.00, 'g');


