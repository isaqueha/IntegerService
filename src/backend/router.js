const express = require('express');
const api = require('./jsonApi');

const IntegerController = require('./controllers/IntegerController');
const SessionController = require('./controllers/SessionController');

const router = express.Router();

router.get('/', (req, res) => {
	return res.send("<h1>IntegerService is unning</h1>");
});

router.post('/user', SessionController.store);
router.get('/current', IntegerController.show);
router.put('/current', IntegerController.update);
router.get('/next', IntegerController.store);

// Render the docs at /
router.get('/docs', api.docsRequest);

module.exports = router;