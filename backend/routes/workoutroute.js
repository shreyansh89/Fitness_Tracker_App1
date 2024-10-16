const express = require('express');

const routes = express.Router();

const workoutcontroller = require("../controller/workoutcontroller");
const { route } = require('./adminroute');




routes.post("/createWorkout", workoutcontroller.createWorkout);
routes.post("/getWorkouts", workoutcontroller.getWorkouts);
routes.delete("/deleteWorkout", workoutcontroller.deleteWorkout);
routes.put("/updateWorkout", workoutcontroller.updateWorkout);


module.exports = routes;