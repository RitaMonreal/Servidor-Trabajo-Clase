const express = require("express");

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.usersPath = "/api/users";
        this.productsPath = "/api/products";

        this.routes();
    }

    routes(){
        this.app.use(this.usersPath, require("../routes/users"));
        this.app.use(this.productsPath, require("../routes/products"));

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
