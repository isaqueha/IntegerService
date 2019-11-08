const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const IntegerController = require('./controllers/IntegerController');

const router = express.Router();
const upload = multer(uploadConfig);

router.get('/', (req, res) => {
	return res.json({ message: 'IntegerService running' });
});

router.get('/integer', IntegerController.index);
// router.get('/spots', SpotController.index);
// router.post('/spots', upload.single('thumbnail'), SpotController.store);

module.exports = router;