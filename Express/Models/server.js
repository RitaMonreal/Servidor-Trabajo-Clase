const express = require("express");

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.usersPath = "/api/users";
        this.productsPath = "/api/products";
        this.charactersPath = "/api/characters";
        this.programsPath = "/api/programs";

        //servidor preparado para vaciar datos a traves del request body en forms de json
        this.app.use(express.json());

        this.routes();
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
    
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor escuchando en el puerto ${this.port}`);
        });
    }
}

module.exports = Server;
