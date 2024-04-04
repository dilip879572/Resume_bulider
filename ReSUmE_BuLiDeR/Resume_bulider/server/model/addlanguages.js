const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addLanguagesSchema = new Schema(
  {
    language: { type: String, required: true },
    expertise: { type: String, required: true },
    programming: { type: String, require: true },
    email: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Addlanguages", addLanguagesSchema);
