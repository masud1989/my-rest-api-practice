const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const Token = req.headers['token-key']

    jwt.verify(Token, "SecretKey666", (err, decoded) =>{
        if (err) {
            res.status(404).json({status:"Invalid Token", data:err})
        }
        else{
            next()
        }
    })
}