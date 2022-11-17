const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const UserSchema=new Schema({
    firstName:{
        type:String,
        required:[true]
    },lastName:{
        type:String,
        required:[true]
    }, mobileNumber:{
        type:Number,
        required:[true],
      unique: [true],
      trim: [true]
    },email:{
        type:String,
        required:[true]
    }
})

const UserItem=mongoose.model('userItem',UserSchema);
module.exports=UserItem;