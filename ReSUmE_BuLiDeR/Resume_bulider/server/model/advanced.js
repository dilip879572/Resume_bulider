// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     basicInfo: {
//         type: {
//             name: String,
//             email: String,
//             number: String,
//             address: String,
//             jobPosition: String,
//             bio: String,
//         },
//         required: true,
//     },
//     experiences: {
//         type: [{
//             date: String,
//             company: String,
//             yourPosition: String,
//             companyAddress: String,
//             positionYour: String,
//         }],
//         default: [],
//     },
//     education: {
//         type: [{
//             date: String,
//             degree: String,
//             institute: String,
//             yourPositionYour: String,
//         }],
//         default: [],
//     },
//     references: {
//         type: [{
//             name: String,
//             contact: String,
//         }],
//         default: [],
//     },
//     addlanguages: {
//         type: [{
//             language: String,
//             expertise: String,
//         }],
//         default: [],
//     },
// });


















const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    basicInfo: {
      name: { type: String },
      image: {type:String},
      email: { type: String },
      number: { type: String },
      address: { type: String },
      linkedin:{type: String},
      skype:{type:String},
      showstack:{type:String},
      github:{type:String},
      jobPosition: { type: String },
      bio: { type: String },
    },  
    
  },
  { timestamps: true }
);

module.exports  = mongoose.model('advanceds', userSchema);