module.exports = (sequelize, DataTypes) => {
	const Wifi = sequelize.define(
		"Wifi",
		{
			ssid: DataTypes.STRING,
			password: DataTypes.STRING,
			priority: DataTypes.INTEGER
		},
		{
			freezeTableName: true
		}
	);

	return Wifi;
};
