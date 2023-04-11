const express = require('express');
const router = express.Router();
const responsesCtrl = require('../controllers/responses');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/queries/:id/responses', ensureLoggedIn, responsesCtrl.create);

router.delete('/responses/:id', ensureLoggedIn, responsesCtrl.delete);

module.exports = router;