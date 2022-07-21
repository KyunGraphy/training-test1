require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports = {
    org: async (req,res,next)=>{
        try {
            let token =  req.headers.accsesstoken
            jwt.verify(token,process.env.accessTokenSecret,(err,decoded)=>{
                if (err) {return res.status(300).json({message: 'invalue token'})}
                req.decoded = decoded
                next() 
            })
        } catch(err) {
            return res.status(400).json({
                message:'not token provided'
            })
        }
    }
}