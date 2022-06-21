const jwt = require("jsonwebtoken")

exports.TokenIssue =  (req, res)=>{
    const PayLoad = {
        exp:Math.floor (Date.now()/1000)+(6660),
        data:{name:"masud", city:"dhaka", admin:true}
    }

    const Token = jwt.sign(PayLoad,"SecretKey666");
    res.send(Token)
}