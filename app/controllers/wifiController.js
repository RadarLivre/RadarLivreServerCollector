const { Wifi } = require("../models");

module.exports = {
	async store(req, res, next) {
		try {
			await Wifi.create({
				...req.body
			});

			return res.send("success");
		} catch (error) {
			return next(error);
		}
	},

	async show(req, res, next) {
		try {
			const { id } = req.params;

			const wifi = await Wifi.findByPk(id);

			return res.send(wifi);
		} catch (error) {
			return next(error);
		}
	},
	async showAll(req, res, next) {
		try {
			const wifi = await Wifi.findAll({
				order: [["priority", "ASC"]]
			});

			console.log(wifi);
			return res.send(wifi);
		} catch (error) {
			return next(error);
		}
	},
	async update(req, res, next) {
		try {
			const wifi = await Wifi.findByPk(req.params.id);
			await wifi.update(req.body);
			return res.send("success");
		} catch (error) {
			return next(error);
		}
	},
	async destroy(req, res, next) {
		try {
			await Wifi.destroy({ where: { id: req.params.id } });
			return res.send("success");
		} catch (error) {
			return next(error);
		}
	}
};
