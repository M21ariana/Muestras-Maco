const express = require("express");
const routes = express.Router();
const controllerApi = require("../controllers/controllerApi")

//recordar que para acceder a estas rutas hay que poner /api 

routes.get("/esquema/inventario", controllerApi.esquemaInventario)

module.exports = routes;