const { Router } = require('express');
const { getAllPrograms, getProgramById} = require('../controllers/programs');
const router = Router();

router.get("/", getAllPrograms);
router.get("/:id", getProgramById);


module.exports = router;