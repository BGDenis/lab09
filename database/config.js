const mongoose = require('mongoose');

const dbconnection = async () => {
    try {
        ///String de conexcion: mongodb+srv://userBueno:v1kx0JjrgG6aR3b7@cluster0.svvty.mongodb.net/test
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParserr: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Conexcion exitosa');
    } catch (error) {
        console.log(error);
        throw new Error('Error en la connecion a la base de datos');
    }
}

module.exports = {
    dbconnection
}

/*PRUEBA
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
        throw new Error('Error en la coneccion a la Base de datos'); */