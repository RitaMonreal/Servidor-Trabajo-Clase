const {response} = require("express");

const productsGet = (req, res = response) => {
    res.status(200).json({
        msg: "Api GET products - controller",
    });
}

const productsPost = (req, res = response) => {
    res.status(200).json({
        msg: "Api POST products - controller",
     });
}

const productsDelete = (req, res = response) => {
    res.status(200).json({
        msg: "Api DELETE products - controller",
     });
}

const productsPut = (req, res = response) => {
    res.status(200).json({
        msg: "Api PUT products - controller",
     });
}

const productsPatch = (req, res = response) => {
    res.status(200).json({
        msg: "Api PATCH products - controller",
     });
}




module.exports = {
    productsGet,
    productsPost,
    productsDelete,
    productsPut,
    productsPatch
}