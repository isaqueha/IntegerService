const mongoose = require('mongoose');

const IntegerSchema = new mongoose.Schema({
	current: Number,
	api_key: String
});

module.exports = mongoose.model('Integer', IntegerSchema);