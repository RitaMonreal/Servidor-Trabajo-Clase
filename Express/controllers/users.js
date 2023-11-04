const {response, request} = require("express");

//http://localhost:8081/api/users?nombre=Carlos&edad=18
const usersGet = (req = request, res = response) => {
    const params = req.query;

    res.status(200).json({
        msg: "Api GET users - controller",
        params
    });
}

const usersPost = (req = request, res = response) => {

    /*
{
    "nombre": "Fernando",
    "edad": -5
}
    */ 
    //1const body = req.body;
    const {nombre, edad} = req.body;
    let result ="";

    if(!edad || !Number.isInteger(edad)){
        res.status(400).json({
            msg: "Api POST users - controller",
            result: "Se necesita una edad válida"
        });
    }

    if(edad >= 18)
        result = "El usuario es mayor de edad"
    else
        result = "El usuario es menor de edad"

    res.status(200).json({
        msg: "Api POST users - controller",
        //1body
        //2nombre
        result
     });
}

const usersDelete = (req = request, res = response) => {
    const id = req.params.id;
    res.status(200).json({
        msg: "Api DELETE users - controller",
        result: "El usuario " +id + " será eliminado"
     });
}

const usersPut = (req = request, res = response) => {

    const id1 = req.body.id;
    const id2 = req.params.id;
    const id3 = req.query.id;

    res.status(200).json({
        msg: "Api PUT users - controller",
        id1,
        id2,
        id3
     });
}

const usersPatch = (req, res = response) => {
    res.status(200).json({
        msg: "Api PATCH users - controller",
     });
}




module.exports = {
    usersGet,
    usersPost,
    usersDelete,
    usersPut,
    usersPatch
}