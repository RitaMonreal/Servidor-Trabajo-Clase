const {response} = require("express");

const usersGet = (req, res = response) => {
    res.status(200).json({
        msg: "Api GET users - controller",
    });
}

const usersPost = (req, res = response) => {
    res.status(200).json({
        msg: "Api POST users - controller",
     });
}

const usersDelete = (req, res = response) => {
    res.status(200).json({
        msg: "Api DELETE users - controller",
     });
}

const usersPut = (req, res = response) => {
    res.status(200).json({
        msg: "Api PUT users - controller",
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