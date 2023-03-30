var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

// This is in /skills
// Need to require the models to getAll()
router.get('/', skillsCtrl.index);
// Add a new route for creating a new Skill to put into models
router.get('/new', skillsCtrl.new)

router.get('/:id', skillsCtrl.show);

router.get('/:id/edit', skillsCtrl.edit)

router.post('/', skillsCtrl.create);

router.delete('/:id', skillsCtrl.delete);

router.put('/:id', skillsCtrl.update)


module.exports = router;
