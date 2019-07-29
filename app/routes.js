const express = require("express");

const routes = express.Router();

// Middlewares

// Controllers
const authController = require("./controllers/userController");
const wifiController = require("./controllers/wifiController");

// auth
routes.post("/authenticate", authController.authenticate);

// wifi
routes.get("/wifi/show/:id", wifiController.show);
routes.get("/wifi/showAll", wifiController.showAll);
routes.post("/wifi/create", wifiController.store);
routes.put("/wifi/update/:id", wifiController.update);
routes.delete("/wifi/delete/:id", wifiController.destroy);

// others
routes.get("/others/restart/server", serverController.restartServer);
routes.get("/others/restart/collector", serverController.restartCollector);
routes.get("/others/backupDB", serverController.backupDB);

module.exports = routes;
