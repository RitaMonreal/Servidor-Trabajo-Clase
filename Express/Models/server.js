const express = require("express");

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.routes();
    }

    routes(){

        //METODOS HTTP
        this.app.get("/api",(req, res)=>{
            //res.send("Hola mundo desde la raiz");
             res.status(200).json({
                msg: "Api GET",
             //   data: [1,2,3]
             });
        });
        
       /* this.app.get("/hola-mundo",(req, res)=>{
            res.send("Hola mundo desde la otra ruta");
        });*/

        this.app.post("/api",(req, res)=>{
            //res.send("Hola mundo desde la raiz");
             res.status(200).json({
                msg: "Api POST",
             //   data: [1,2,3]
             });
        });

        this.app.delete("/api",(req, res)=>{
            //res.send("Hola mundo desde la raiz");
             res.status(200).json({
                msg: "Api DELETE",
             //   data: [1,2,3]
             });
        });
        
        this.app.put("/api",(req, res)=>{
            //res.send("Hola mundo desde la raiz");
             res.status(200).json({
                msg: "Api PUT",
             //   data: [1,2,3]
             });
        });

        this.app.patch("/api",(req, res)=>{
            //res.send("Hola mundo desde la raiz");
             res.status(405).json({
                msg: "Api PATCH",
             //   data: [1,2,3]
             });
        });


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
