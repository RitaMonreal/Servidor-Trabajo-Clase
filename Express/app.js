//Escritura de manehadores de peticiones con diferenres verbos HTTP en diferentes rutas

//crear el servidor
require("dotenv").config();
const Server = require("./Models/server");

const server = new Server();

server.listen();

/*const express = require("express");*/
/*const app = express();

const port = process.env.PORT;*/

/*app.get("/",(req, res)=>{
    res.send("Hola mundo desde la raiz");
});

app.get("/hola-mundo",(req, res)=>{
    res.send("Hola mundo desde la otra ruta");
});

app.get("*",(req, res)=>{
    res.send("Error - ruta no encontrada");
});*/

/*app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto ${port}`);
});*/