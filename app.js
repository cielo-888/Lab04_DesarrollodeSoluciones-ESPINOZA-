const express = require('express');
const app = express();

// Ruta principal
app.get('/', (req, res) => {
    res.send('ESPINOZA CORTEZ - LAB04');
});

// Ruta para mostrar clientes
app.get('/clientes', (req, res) => {
    res.send('Clientes: Sofia Reyes Mendoza, Lucia Alvarez Ramirez, Pilar Peña Carbajal');
});

// Ruta para mostrar productos
app.get('/productos', (req, res) => {
    res.send('Productos: Laptop, Refrigeradora, Television');
});

// Puerto en el que escucha la aplicación
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor Express ejecutándose en el puerto ${PORT}`);
});
