const { Router } = require('express');
const { getAllPrograms, getProgramById, createCharacter} = require('../controllers/programs');
const router = Router();

router.get("/", getAllPrograms);
router.get("/:id", getProgramById);
router.post("/", createCharacter);


module.exports = router;