const express = require("express");
const routes = express.Router;

const controllerHome = require("../controllers/controllerHome");
routes.get("/", controllerHome.home)

