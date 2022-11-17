const user=require('../models/user_model');
const cred=require('../models/cred_model');
const bcrypt =require('bcrypt');
const { isObjectIdOrHexString } = require('mongoose');
const fast2sms=require('fast-two-sms');
require('dotenv').config();

const saltRounds = 10; //times salting for hashing 

module.exports.user_post=async(req,res)=>{
    console.log(req.body);
    await user.create(req.body).then(function(detail){
        res.send(detail);
    }).catch(e=>{
        res.send(e);
        console.log(e);
    });
}


module.exports.cred_post=async(req,res)=>{
    console.log(req.body);
    const pass=req.body.password;
 bcrypt.hash(pass,saltRounds,(err,hash)=>{  //storing password after encrypting
        const newcred= new cred({
            email:req.body.email,
            password:hash
        })
        newcred.save(); 
        res.send("cred saved !");
})
}

module.exports.cred_get=async(req,res)=>{
    // console.log(req.body);
    const User=await cred.findOne({email: req.body.email});
    bcrypt.compare(req.body.password,User.password, (err,response)=>{
                res.send("correct creds !");
    });
    res.send('check cred!');
}

module.exports.user_update=async(req,res)=>{
    // console.log(req.params.id)
   await user.findOneAndUpdate({_id:req.params.id},{$set:{
    [`${req.body.index}`]:req.body.add
   }}).then(function(details){
        res.send(details);
   }).catch(e=>{
    res.send(e);
    console.log(e);
   });
}

module.exports.send_message=async(req,res)=>{
    // console.log(`${process.env.API_KEY}`);
 const response= await fast2sms.sendMessage({authorization: `${process.env.API_KEY}`,message:` your otp is : ${Math.random()*10000}`,numbers:[8445088852]})
    console.log(response);      
 res.send(response);
} 