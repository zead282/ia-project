const conn = require("../db/dbConnection");
const util = require("util");

const admin = async(req , res , next ) => {
     const query = util.promisify(conn.query).bind(conn);
     const { token }= req.headers; 
     const admin = await query ("select * from user where token =?",[token]);
     //console.log(admin[0]);
    if (admin[0] && admin[0].Type== "0"){
        next();
    }else{
        
        res.status(403).json({
            msg:"you ara not admin to access this route !",
        });
    }
}

module.exports= admin;