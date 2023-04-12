const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');

const queriesCtrl = require('../controllers/queries');

router.get('/', queriesCtrl.index);

router.get('/new', ensureLoggedIn, queriesCtrl.new);

router.get('/:id', queriesCtrl.show);

router.get('/:id/edit', ensureLoggedIn, queriesCtrl.edit)

router.put('/:id', queriesCtrl.update)

router.post('/', ensureLoggedIn, queriesCtrl.create);

router.delete('/:id', ensureLoggedIn, queriesCtrl.delete)


module.exports = router;

