const express = require('express');

const router = express.Router();

const admincontroller = require("../controller/admincontroller");

const authMiddleware = require("../config/authMiddleware");


// Middleware chek the user is admin
const adminMiddleware = (req, res, next) => {
    if(req.user.role !== 'admin'){
        return res.status(403).json({message: "Access denied! Only admin can access this route."});
    }
    next();
}

// Get all users
router.get('/users', authMiddleware, adminMiddleware, admincontroller.getUsers );


// admin create a fitness program 
router.post("fitnessProgram", authMiddleware, adminMiddleware , admincontroller.createFitnessProgram)


module.exports = router;