const express = require('express');

const routes = express.Router();

const goalcontroller = require("../controller/goalcontroller");

const authMiddleware = require("../config/authMiddleware");





routes.post("/creategoal", authMiddleware, goalcontroller.creategoal);

routes.get("/getsinglegoal/:id" , authMiddleware, goalcontroller.getsinglegoal);

routes.get("/getAllGoals", authMiddleware, goalcontroller.getAllGoals);

routes.delete("/deleteGoal", authMiddleware, goalcontroller.deleteGoal);

routes.put("updateGoal", authMiddleware, goalcontroller.updateGoal);


module.exports = routes;