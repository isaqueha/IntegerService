const IntegerModel = require('../models/Integer')

module.exports = {
	async current(req, res) {
		const { api_key } = req.headers;
		let integer = await IntegerModel.findOne({ api_key });
		if (!integer) {
			return res.json({ message: "No Authorization" });
		}

		return res.json({ current: integer.current });
	},

	async next(req, res) {
		// TODO Refactor below code
		const { api_key } = req.headers;
		let integer = await IntegerModel.findOne({ api_key });
		if (!integer) {
			return res.json({ message: "No Authorization" });
		}

		if (integer) {
			integer.current += 1;
			// TODO Refactor below code, duplicate
			await IntegerModel.updateOne({ api_key }, {
				current: integer.current
			});
		}
		
		return res.json({ current: integer.current });
	},

	async updateCurrent(req, res) {
		const { api_key } = req.headers;
		let integer = await IntegerModel.findOne({ api_key });
		if (!integer) {
			return res.json({ message: "No Authorization" });
		}

		// TODO Refactor below code
		let { current } = req.body;
		current = parseInt(current);
		if ((!current && current !== 0) || current < 0) {
			return res.json({ message: "Invalid Value Input" });
		}
		
		await IntegerModel.updateOne({ api_key }, { 
			current
		});
		
		return res.json({ current });
	},
};