const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');

const queriesCtrl = require('../controllers/queries');

router.get('/', queriesCtrl.index);

router.get('/new', ensureLoggedIn, queriesCtrl.new);

router.get('/:id', queriesCtrl.show);

router.post('/', ensureLoggedIn, queriesCtrl.create);


module.exports = router;

