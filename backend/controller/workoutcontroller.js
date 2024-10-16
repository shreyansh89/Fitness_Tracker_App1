const Workout = require("../models/workoutmodel");

module.exports.createWorkout = async(req, res)=> {
    const { type, duration , caloriesBurned } = req.body;
    try{
        const workout = new Workout({
            user: req.user.id,
            type,
            duration,
            caloriesBurned
        })
        await workout.save();
        res.json(workout);
    }
    catch(err){
        res.status(500).json({ message: err.message});
    }
}

module.exports.getWorkouts = async(req, res)=> { 
    try{
        const workouts = await Workout.find({ user: req.user.id});
        res.json(workouts);
    }
    catch(err){
        res.status(500).json({ message: err.message});
    }
}

module.exports.deleteWorkout = async(req, res)=> {
    const { id } = req.params;
    try{
        const workout = await Workout.findById(id);
        if(!workout) return res.status(404).json({ message: "Workout not found"});

        if(workout.user.toString() !== req.user.id) {
            return res.status(404).json({message: "unauthorized to delete this workput"});
        }
        await workout.remove();
        res.json({ message: "Workout deleted successfully"});
    }
    catch(err){
        res.status(500).json({ message: err.message});
    }
}


module.exports.updateWorkout = async(req,res) =>{
    const { id } = req.params;
    const { type, duration, caloriesBurned } = req.body;
    try{
        let workout = await Workout.findById(id);
        if(!workout) return res.status(404).json({ message: "Workout not found"});

        if(workout.user.toString() !== req.user.id) {
            return res.status(404).json({message: "unauthorized to update this workout"});
        }
        workout.type = type;
        workout.duration = duration;
        workout.caloriesBurned = caloriesBurned;
        await workout.save();
        res.json(workout);
    }
    catch(err){
        res.status(500).json({ message: err.message});
    }
}



// delete 
// update 