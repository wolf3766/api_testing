const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const credSchema=new Schema({
        email:{
            type:String,
            required:[true]
        },
        password:{
            type:String,
            required:[true]
        }
}) 

const UserData=mongoose.model('userdata',credSchema);

module.exports=UserData;