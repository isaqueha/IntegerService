const User = require('../models/User')
const IntegerModel = require('../models/Integer')
const hasher = require('../util/Hasher');

// index, show, store, update, destroy

module.exports = {
	async store(req, res) {
		const { email, password } = req.body;
		let hash = hasher(password);
		let user = await User.findOne({ email, hash });

		if (!user) {
			user = await User.create({ email, hash });
			await IntegerModel.create({
				current: 0,
				api_key: hash
			});
		}
		
		return res.json({ "api_key": user.hash });
	}
};