const express = require('express');

const port = 8000;

const path = require('path');

const app = express();

const db = require("./config/mongoose");


const dotenv = require("dotenv")
dotenv.config();
app.use(express.json());


app.use('/api/auth', require("./routes/authroute"));
app.use('/api/workuts', require("./routes/workoutroute"));
app.use('/api/goals', require("./routes/goalroute"));
app.use('/api/admin', require("./routes/adminroute"));





app.listen(port , ()=> console.log("server is running on port " + port))