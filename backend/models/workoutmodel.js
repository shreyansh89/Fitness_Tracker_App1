const mongoose = require('mongoose');

const WorkoutSchema = mongoose.Schema({
    user :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    type :{
        type : String,
        required : true
    },
    duration :{
        type : Number,
        required : true
    },
    caloriesBurned :{
        type : Number,
    },
    date :{
        type : Date,
        default : Date.now()
    }
});


const Workout = mongoose.model('Workout', WorkoutSchema);
module.exports = Workout;