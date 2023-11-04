const { Router } = require('express');
const { getAllCharacters, getCharactersById } = require('../controllers/characters');
const router = Router();

router.get("/", getAllCharacters);
router.get("/:id", getCharactersById);

module.exports = router;