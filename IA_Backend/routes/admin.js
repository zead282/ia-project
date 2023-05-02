const express = require('express')
const router = express.Router()
const conn = require("../db/dbConnection");

const { body, validationResult } = require("express-validator");

router.post (
    "./register",
    body("email").isEmail().withMessage("please enter a valid email "),
    body("password").isLength({ min :8, max:20}).withMessage("password should be (8-20) character"),
    (req , res) => {
        try {
           const errors = validationResult(req) ;
           if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
           }
           res.json("success");
        }
        catch(err) {
            res.status(500).json({ err:err});
        }
    }

)
module.exports= router;
