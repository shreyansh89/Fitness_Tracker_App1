// create 
// update
// track

const Goal = require("../models/goalmodel");

module.exports.creategoal = async(req,res)=>{
    const {type , target, timeFrame} = req.body;

    try{
        const goal = new Goal({
            user : req.user.id,
            type,
            target,
            timeFrame
        })
        await goal.save();
        res.json(goal);
    }
    catch(err){
        res.status(500).json({ message : err.message });
    }
}

module.exports.getsinglegoal = async(req, res)=>{
    const { id } = req.params;

    try{
        const goal = await Goal.findById(id);
        if(!goal) return res.status(404).json({ message : "Goal not found." });

        if(goal.user.toString() !== req.user.id){
            return res.status(401).json({ message : "Unauthorized to view." });
        }
        res.json(goal);
    }
    catch(err){
        res.status(500).json({ message : err.message });
    }
}

module.exports.getAllGoals = async(req, res)=>{
    try{
        const goals = await Goal.find({ user : req.user.id });
        res.json(goals);
    }
    catch(err){
        res.status(500).json({ message : err.message });
    }
}

module.exports.deleteGoal = async(req, res)=>{
    const { id } = req.params;
    try{
        const goal = await Goal.findById;
        if(!goal) {
            return res.status(404).json({ message : "Goal not found." });
        }

        if(goal.user.toString() !== req.user.id){
            return res.status(401).json({ message : "Unauthorized to delete." });
        }
        await goal.remove();
        res.json({ message : "Goal deleted successfully." });
    }
    catch(err){
        res.status(500).json({ message : err.message });
    }
}

module.exports.updateGoal = async(req, res)=>{
    const { id } = req.params;
    const { type, target, timeFrame , achieved} = req.body;

    try{
        let goal = await Goal.findById(id);
        if(!goal){
            return res.status(404).json({ message : "Goal not found." });
        }

        if(goal.user.toString() !== req.user.id){
            return res.status(401).json({ message : "Unauthorized to update." });
        }
        goal.type = type || goal.type;
        goal.target = target ||  goal.target;
        goal.timeFrame = timeFrame || goal.timeFrame;
        goal.achieved = achieved !== undefined ? achieved : goal.achieved;

        await goal.save();
        res.json(goal);
    }
    catch(err){
        res.status(500).json({ message : err.message });
    }
}