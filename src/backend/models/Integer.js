const mongoose = require('mongoose');

const IntegerSchema = new mongoose.Schema({
	current: Number
});

module.exports = mongoose.model('Integer', IntegerSchema);