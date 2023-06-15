const express = require("express");
const routes = express.Router();

const controllerLogin = require("../controllers/controllerLogin");

routes.get("/login", controllerLogin.login)
routes.post("/login", controllerLogin.login)

module.exports = routes;