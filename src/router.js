const express = require('express');

const IntegerController = require('./controllers/IntegerController');
const SessionController = require('./controllers/SessionController');

const router = express.Router();

router.get('/', (req, res) => {
	return res.send("<h1>IntegerService is Running</h1>");
});

router.post('/user', SessionController.store);
router.get('/current', IntegerController.auth, IntegerController.current);
router.put('/current', IntegerController.auth, IntegerController.validateInput, IntegerController.updateCurrent);
router.get('/next', IntegerController.auth, IntegerController.next);

module.exports = router;