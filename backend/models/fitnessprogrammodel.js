const mongoose = require('mongoose');

const FitnessProgramSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,
    },
    description :{
        type : String,
    },
    createdBy :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true,
    }
})


const Fitnessprogram = mongoose.model("FitnessProgram", FitnessProgramSchema);
module.exports = Fitnessprogram;
