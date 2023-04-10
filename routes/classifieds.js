const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');

const classifiedsCtrl = require('../controllers/classifieds')

router.get('/', classifiedsCtrl.index)

router.get('/new', ensureLoggedIn, classifiedsCtrl.new)

router.get('/:id/edit', classifiedsCtrl.edit)

router.put('/:id', classifiedsCtrl.update)

router.get('/:id', classifiedsCtrl.show)

router.post('/', ensureLoggedIn, classifiedsCtrl.create)

router.delete('/:id', ensureLoggedIn, classifiedsCtrl.delete)

module.exports = router;