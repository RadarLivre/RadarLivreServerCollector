module.exports = {
	up: (queryInterface, DataTypes) =>
		queryInterface.createTable("Wifi", {
			id: {
				primaryKey: true,
				type: DataTypes.INTEGER,
				allowNull: false
			},
			ssid: {
				type: DataTypes.STRING,
				allowNull: false
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false
			},
			priority: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			createdAt: {
				type: DataTypes.DATE,
				allowNull: false
			},
			updatedAt: {
				type: DataTypes.DATE,
				allowNull: false
			}
		}),

	down: queryInterface => queryInterface.dropTable("Wifi")
};
