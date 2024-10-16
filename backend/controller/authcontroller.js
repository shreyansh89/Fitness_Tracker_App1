const User = require("../models/usermodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")


module.exports.ragister = async(req,res)=> {
    const {name ,email, password}  = req.body;
    try{
        let user = await User.findOne({ email });
        if(user) return res.status(400).json({ error: "User already exist" })
        
        user = new User({name ,email, password: bcrypt.hashSync(password , 10)});
        await user.save();

        const token = jwt.sign({ id: user.id, role: user.role}, process.env.JWT_SECRET, {expiresIn : '1h' });
        res.json({ token });
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
}

module.exports.login = async(req,res) => {
    const {email, password} = req.body;``
    try{
        let user = await User.findOne({ email });
        if(!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        const token = jwt.sign({ id: user.id, role: user.role}, process.env.JWT_SECRET, {expiresIn : '1h' });
        res.json({ token });
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
}