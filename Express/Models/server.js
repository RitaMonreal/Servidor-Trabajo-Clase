const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.connection_string = process.env.CONNECTION_STRING;

        this.usersPath = "/api/users";
        this.productsPath = "/api/products";
        this.charactersPath = "/api/characters";
        this.programsPath = "/api/programs";

        this.middlewares();
        this.routes();

        this.db();
    }

    routes(){
        this.app.use(this.usersPath, require("../routes/users"));
        this.app.use(this.productsPath, require("../routes/products"));
        this.app.use(this.charactersPath, require("../routes/characters"));
        this.app.use(this.programsPath, require("../routes/programs"));

        this.app.get("*",(req, res)=>{
            res.status(404).send("Error - ruta no encontrada");
        });
    }

    middlewares(){
        //servidor preparado para vaciar datos a traves del request body en forms de json
        this.app.use(express.json());
        this.app.use(cors());
    }

    //Conexion a la base de datos
    db(){
        //Importanción, conexion string
        mongoose.connect(this.connection_string).then(
            //regresa una PROMESA, porque puede hacerlo rápido
            //la promesa ejecuta then cuando funciona
            //.catch no se conectó
            //Se les manda un callback
            () => {
                console.log("Conexion a la bd exitosa");
            }
        ).catch(
            (error) => {
                console.log("Error al conectar con la db");
                console.log(error);
            }
        )
    }
    
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor escuchando en el puerto ${this.port}`);
        });
    }
}

module.exports = Server;
