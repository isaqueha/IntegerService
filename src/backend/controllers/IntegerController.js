const IntegerModel = require('../models/Integer')

// index, show, store, update, destroy

module.exports = {
	async show(req, res) {
		let integer = await IntegerModel.findOne({});

		return res.json({ current: integer.current });
	},

	async store(req, res) {
		let integer = await IntegerModel.findOne({});

		if (!integer) {
			integer = await IntegerModel.create({ 
				current: 0
			});
		} else {
			integer.current += 1;
			await IntegerModel.update({}, { 
				current: integer.current
			});
		}
		
		return res.json({ current: integer.current });
	},

	async update(req, res) {
		let { current } = req.body;
		current = parseInt(current);
		if (current < 0) {
			return res.json({ message: "error" });
		}
		
		await IntegerModel.update({}, { 
			current
		});
		
		return res.json({ current });
	},
};