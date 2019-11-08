const IntegerCount = require('../models/IntegerCount')

// index, show, store, update, destroy

module.exports = {
	async store(req, res) {
		const { email } = req.body;

		let integerCount = await IntegerCount.findOne({ email });

		if (!integerCount) {
			integerCount = await IntegerCount.create({ email });
		}
		
		return res.json(integerCount);
	}
};