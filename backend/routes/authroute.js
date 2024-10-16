const express = require('express');

const routes = express.Router();

const authcontroller = require("../controller/authcontroller")



routes.post("/ragister", authcontroller.ragister);

routes.post("/login", authcontroller.login);


module.exports = routes;