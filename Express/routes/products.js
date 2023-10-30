const Router = require("express");
const { productsGet, productsPost, productsPut, productsPatch, productsDelete } = require("../controllers/products");
const router = Router();

//Rutas relativas y dependen de la que se definió en el server
//METODOS HTTP
router.get("/", productsGet)

router.post("/", productsPost);

router.delete("/", productsDelete);

router.put("/", productsPut)

router.patch("/", productsPatch)

module.exports = router;