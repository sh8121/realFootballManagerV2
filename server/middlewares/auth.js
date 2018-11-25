const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.token;
    if(!token){
        return res.status(403).json({
            message: "Not Looged In"
        });
    }

    jwt.verify(token, req.app.get("jwt-secret"), (error, decoded) => {
        if(error){
            return res.status(403).json({
                message: error.message
            });
        }
        req.info = decoded;
        next();
    })
}

module.exports = authMiddleware;