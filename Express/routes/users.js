const Router = require("express");
const { usersPost, usersDelete, usersPut, usersPatch, usersGet } = require("../controllers/users");
const router = Router();

//Rutas relativas y dependen de la que se definió en el server
//METODOS HTTP
router.get("/", usersGet);

/* this.app.get("/hola-mundo",(req, res)=>{
    res.send("Hola mundo desde la otra ruta");
});*/

router.post("/", usersPost);

router.delete("/:id", usersDelete);

router.put("/", usersPut);

router.patch("/", usersPatch);

module.exports = router;