const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Definir una ruta para el formulario
app.get('/formulario', (req, res) => {
    let formularioHTML = `
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">

<div class="container mt-5">
    <h2 class="text-center">Formulario de Contacto</h2>
    <form action="/formulario" method="get">
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="nombre">Nombre</label>
                <input type="text" class="form-control bg-primary" id="nombre" name="nombre" placeholder="Nombre">
            </div>
            <div class="form-group col-md-6">
                <label for="apellido">Apellido</label>
                <input type="text" class="form-control bg-primary" id="apellido" name="apellido" placeholder="Apellido">
            </div>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Enviar</button>
    </form>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    `;

    // Si hay parámetros en la URL, significa que se han enviado datos del formulario
    if (req.query.nombre && req.query.apellido) {
        const nombre = req.query.nombre;
        const apellido = req.query.apellido;
        formularioHTML += `
            <h2>Valores del Formulario</h2>
            <p>Nombre: ${nombre}</p>
            <p>Apellido: ${apellido}</p>
        `;
    }

    res.send(formularioHTML);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});




