const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  addexperiences: { type: String },
  date: { type: String },
  currently: { type: String },
  company: { type: String },
  yourPosition: { type: String },
  companyAddress: { type: String },
  positionYour: { type: String },
  email:{type:String}
}, { timestamps: true });

module.exports = mongoose.model('experiences', userSchema);
