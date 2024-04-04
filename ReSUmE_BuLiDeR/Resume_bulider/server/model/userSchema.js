const mongoose= require("mongoose");
const userSchema = new mongoose.Schema({

    googleId:String,
    displayName:String,
    email:String,
    image:String,
},{timestamps:true});




const userdb = new mongoose.model("usegoogle",userSchema);

module.exports = userdb;


