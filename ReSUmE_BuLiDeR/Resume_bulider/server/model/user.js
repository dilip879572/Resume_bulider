const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");  
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    select: false,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  verifytoken: {
    type: String,
  },
});

userSchema.pre("save", async function (next) {
  try {
    if (this.isNew || this.isModified("password")) {
      const hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
    }
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.getAuthToken = async function () {
  let params = {
    id: this._id,
    email: this.email,
    password: this.password,
  };
  let keysecret = "gdshskfjkdggndh";
  var tokenValue = jwt.sign(params, keysecret);
  this.tokens = this.tokens.concat({ token: tokenValue });
  await this.save();
  return tokenValue;
};

const User = mongoose.model("User", userSchema);

module.exports = User;

