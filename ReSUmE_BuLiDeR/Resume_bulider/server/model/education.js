const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const educationSchema = new Schema({
  addexpriences: { type: String },
  date: { type: String },
  currently: { type: String },
  degree: { type: String },
  institute: { type: String },
  email:{type:String}
}, { timestamps: true });

module.exports = mongoose.model('Education', educationSchema);
