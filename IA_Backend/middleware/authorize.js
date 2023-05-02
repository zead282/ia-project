const conn = require("../db/dbConnection");
const util = require("util");

const authorized = async(req , res, next ) => {
     const query = util.promisify(conn.query).bind(conn);
     const { token }= req.headers;
     const user = await query ("select * from user where token =?",[token]);
    if (user[0]){
        next();  
    }else{
       // console.log(user[0]);
        res.status(403).json({
            msg:"you ara not authorized to access this route !",
            
        });
    }
}

module.exports= authorized;