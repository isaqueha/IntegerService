const crypto = require('crypto');

let hash = function (value) {
	let valueHashed = crypto.createHash('sha256')
		.update(value)
		.digest('base64');

	return valueHashed;
};

module.exports = hash