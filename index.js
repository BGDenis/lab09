/// User: userBueno
///password: v1kx0JjrgG6aR3b7

const express = require('express');
const cors = require('cors');
require('dotenv').config();

/*const {
    dbconnection
} = */

//CODIGO PARA DESPLEGAR EL SERVIDOR 
const app = express();

app.use(cors());
//PRIMERA PETICION GET
app.get('/', (req, res) => {
    res.json({
        ok: 'true',
        msg: 'Desplegado'
    });
});

//console.log(process.env);

//CODIGO PARA DESPLEGAR EL SERVIDOR 
app.listen(process.env.PORT, () => {
    console.log('Servidor web escuchando en el puerto : ' + 3000);
    console.log("Bueno Gutierrez Denis");
});

/*PRUEBAS
config.js
const mongoose = require('mongoose');
const dbconection = async() => {
    try {
        await mongoose.connect('mongodb+srv://userValencia:fZJ3HrzFqDSuvZwo@cluster0.kfaje.mongodb.net/proyectosDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Coneccion exitosa a la base de datos');
    } catch (error) {
        console.log(error);
        throw new Error('Error en la coneccion a la Base de datos');
index.js
const express = require('express');
const { dbconection } = require('./database/config');

//console.log('Hola mundo');
// usuario : userValencia
//password : fZJ3HrzFqDSuvZwo
// string coneccion: mongodb+srv://userValencia:<password>@cluster0.kfaje.mongodb.net/test
//CODIGO PARA DESPLEGAR EL SERVIDOR
const server = express();
server.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Desplegando el primer servicios REST'
    });
});
dbconection();
server.listen(300
server.listen(3000, () => {
    console.log('El servidor se está ejecutando en el puerto: ' + 3000),
        console.log('Edwin Valencia Castillo')
});*/