const { Router } = require('express');
const { getAllPrograms, getProgramById, createCharacter, updateProgramById, deleteCharacter} = require('../controllers/programs');
const router = Router();

router.get("/", getAllPrograms);
router.get("/:id", getProgramById);
router.post("/", createCharacter);

router.put("/:id", updateProgramById);
router.delete("/:id", deleteCharacter);

module.exports = router;