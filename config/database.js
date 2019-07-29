const path = require("path");

module.exports = {
	dialect: "sqlite",
	storage: path.resolve("database", "collector.sqlite3")
};
