const User = require("../models/usermodel");
const FitnessProgram = require("../models/fitnessprogrammodel");

module.exports.getUsers = async(req,res) =>{
    try{
        const users = await User.find({});
        res.json(users);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}

   
module.exports.createFitnessProgram = async(req, res) =>{  
    const {name, description} = req.body;

    try{
        const program = new FitnessProgram({name, description, createdBy: req.user.id})
        await program.save();
        res.json(program);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}