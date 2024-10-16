const mongoose = require('mongoose');

const GoalSchema = mongoose.Schema({
    user :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type :{
        type: String,
        required: true
    },
    target :{
        type: Number,
        required: true
    },
    achieved :{
        type : Boolean,
        default: false
    },
    timeFrame :{
        type: String,
        enum : ['weekly', 'monthly'],
        required: true
    }
})


const Goal = mongoose.model('Goal', GoalSchema);
module.exports = Goal;