const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");
    if(!token) return res.status(401).json({message : "no Token , authorization denied"});

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch(err) {
        res.status(401).json({message : "invalid token"});
    }
}

module.exports = authMiddleware;