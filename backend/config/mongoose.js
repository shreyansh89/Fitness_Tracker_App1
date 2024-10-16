const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/Fitness_Tracker_App");

const db = mongoose.connection;

db.once('open', (e)=>{
    if(e){
        console.log("db is not connected");
    }
    console.log("db is connected");
})

module.exports = db;