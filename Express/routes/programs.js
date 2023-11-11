const { Router } = require('express');
const { getAllPrograms, getProgramById, createCharacter, updateProgramById, deleteProgram} = require('../controllers/programs');
const router = Router();

router.get("/", getAllPrograms);
router.get("/:id", getProgramById);
router.post("/", createCharacter);

router.put("/:id", updateProgramById);
router.delete("/:id", deleteProgram);

module.exports = router;