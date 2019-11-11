const IntegerModel = require('../models/Integer');

let updateOneInteger = async function(api_key, current) {
	return await IntegerModel.updateOne({ api_key }, {
		current
	});
};

let getInteger = async function(req) {
	const { api_key } = req.headers;
	let integer = await IntegerModel.findOne({ api_key });
	return integer
}

let invalidValue = function(value) {
	return (!value && value !== 0) || value < 0;
}

module.exports = {
	async auth(req, res, next) {
		let integer = await getInteger(req);
		if (!integer) {
			return res.json({ message: "No Authorization" });
		}
		next();
	},

	async current(req, res) {
		let integer = await getInteger(req);
		return res.json({ current: integer.current });
	},

	async next(req, res) {
		const { api_key } = req.headers;
		let { current } = await getInteger(req);
		if (current >= 0) {
			current += 1;
			await updateOneInteger(api_key, current);
		}
		
		return res.json({ current });
	},

	async updateCurrent(req, res) {
		const { api_key } = req.headers;
		let { current } = req.body;

		await updateOneInteger(api_key, current);
		return res.json({ current });
	},

	validateInput(req, res, next) {
		let { current } = req.body;
		current = parseInt(current);
		if (invalidValue(current)) {
			return res.json({ message: "Invalid Value Input" });
		}
		next();
	}
};