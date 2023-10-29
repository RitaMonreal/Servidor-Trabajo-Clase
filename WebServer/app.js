const http = require("http");


//funcion se va a ejecutar cuando hagamos repetciones, dos parametros 
//req y res. vienen datos de la peticion de donde viene y parametros y la resuesta a lo que esta llegando
//listen metodo especificamos el puerto que va escuechra las repeticiones
http.createServer((req, res)=>{
    console.log(req);
    res.write("Hola mundo");
    res.end();
}).listen(8080);