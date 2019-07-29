const bcrypt = require("bcryptjs");
const { User } = require("../models");

module.exports = {
	async authenticate(req, res, next) {
		try {
			const { email, password } = req.body;
			const user = await User.findOne({ where: { email } });

			if (!user) {
				return res.redirect("user does not exist");
			}

			if (!(await bcrypt.compare(password, user.password))) {
				return res.redirect("invalid password");
			}
			return res.send("success");
		} catch (error) {
			return next(error);
		}
	}
};
