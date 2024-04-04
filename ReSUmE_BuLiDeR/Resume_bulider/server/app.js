require("dotenv").config();
const express = require("express");
const advanced = require("./model/advanced");
require("./db/conn");
const app = express();
const cors = require("cors");
const PORT = 6085;
const userdb = require("./model/userSchema");
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;

const clientid =
  "50093482855-k6rhj2cavbgp0jj5mtc14q3739jrng95.apps.googleusercontent.com";
const clientsecret = "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";
app.use(cors());
app.use(express());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(express.json());

// setup session
app.use(
  session({
    secret: "dilip",
    resave: false,
    saveUninitialized: true,
  })
);

// setuppassport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new OAuth2Strategy(
    {
      clientID: clientid,
      clientSecret: clientsecret,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("profile", profile);
      try {
        let user = await userdb.findOne({ googleId: profile.id });

        if (!user) {
          user = new userdb({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.email[0].value,
            image: profile.photos[0].value,
          });

          await user.save();
        }

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// initial google ouath login
app.get("/auth/google", passport.authenticate("google", { scope: ["email"] }));

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "http://localhost:3000/login",
  })
);

app.get("/login/sucess", async (req, res) => {
  if (req.user) {
    res.status(200).json({ message: "user Login", user: req.user });
  } else {
    res.status(400).json({ message: "Not Authorized" });
  }
});

app.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("http://localhost:3000");
  });
});

const Experiences = require("./model/experiences");

app.post("/experience", async (req, res) => {
  try {
    const newUser = new Experiences({
      addexpriences: req.body.addexpriences,
      date: req.body.date,
      currently: req.body.currently,
      company: req.body.company,
      yourPosition: req.body.yourPosition,
      companyAddress: req.body.companyAddress,
      positionYour: req.body.positionYour,
      email: req.body.email,
    });

    newUser
      .save()
      .then((result) => {
        return res.status(201).json({
          status: 201,
          message: "Upload successful",
          result,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json({ error: "Failed to save the data." });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const Addlanguages = require("./model/addlanguages");

app.post("/addlanguage", async (req, res) => {
  try {
    const newUser = new Addlanguages({
      language: req.body.language,
      expertise: req.body.expertise,
      programming: req.body.programming,
      email: req.body.email,
    });

    newUser
      .save()
      .then((result) => {
        return res.status(201).json({
          status: 201,
          message: "Upload successful",
          result,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json({ error: "Failed to save the data." });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const Education = require("./model/education");

app.post("/education", async (req, res) => {
  try {
    const newUser = new Education({
      addeducation: req.body.addeducation,
      date: req.body.date,
      currently: req.body.currently,
      degree: req.body.degree,
      institute: req.body.institute,
      email: req.body.email,
    });

    newUser
      .save()
      .then((result) => {
        return res.status(201).json({
          status: 201,
          message: "Upload successful",
          result,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json({ error: "Failed to save the data." });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//****************************************************************************************************************** */

const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");
const Advanced = require("./model/advanced");
const { json } = require("body-parser");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "./Public/uploads"));
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });
app.use(express.json({ limit: "10mb" }));

app.post("/uploads", upload.single("image"), (req, res) => {
  try {
    const newUser = new Advanced({
      basicInfo: {
        name: req.body.name,
        email: req.body.email,
        image: req.file.filename,
        number: req.body.number,
        address: req.body.address,
        linkedin: req.body.linkedin,
        skype: req.body.skype,
        showstack: req.body.showstack,
        github: req.body.github,
        bio: req.body.bio,
        jobPosition: req.body.jobPosition,
      },
    });

    newUser
      .save()
      .then((result) => {
        return res.status(201).json({
          status: 201,
          message: "Upload successful",
          result,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json({ error: "Failed to save the data." });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/user/:email", async (req, res) => {
  const { email } = req.params;

  try {
    const experiences = await Experiences.find({ email });
    const addLanguages = await Addlanguages.find({ email });
    const educations = await Education.find({ email });
    const advancedInfo = await Advanced.findOne({ "basicInfo.email": email });

    const userData = {
      experiences,
      addLanguages,
      educations,
      advancedInfo,
    };

    res.json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.use("/api/", express.static("./Public/uploads"));

app.get("/show/:email", async (req, res) => {
  try {
    const email = req.params.email;
    console.log(email);

    if (!email) {
      return res.status(400).json({
        error:
          "Invalid request format. Provide email as a parameter in the URL.",
      });
    }

    const result = await Advanced.findOne({ "basicInfo.email": email });

    if (!result) {
      return res.status(404).json({ error: "Email not found." });
    }

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/data/:email", async (req, res) => {
  try {
    const email = req.params.email;

    if (!email) {
      return res.status(400).json({
        error:
          "Invalid request format. Provide email as a parameter in the URL.",
      });
    }

    const data = await Advanced.aggregate([
      {
        $match: { "basicInfo.email": email },
      },
      {
        $lookup: {
          from: "experiences",
          localField: "_id",
          foreignField: "advancedId",
          as: "experiences",
        },
      },
      {
        $lookup: {
          from: "addlanguages",
          localField: "_id",
          foreignField: "advancedId",
          as: "languages",
        },
      },
      {
        $lookup: {
          from: "educations",
          localField: "_id",
          foreignField: "advancedId",
          as: "educations",
        },
      },
    ]);

    if (!data || data.length === 0) {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//*------------------------------------------------------------------------------------------------------------------------*//
const jwt = require("jsonwebtoken");
let secretKey = "gdshskfjkdggndh";
const User = require("./model/user");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill in all details" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user_data = new User(req.body);
    const result = await user_data.save();
    const myToken = await user_data.getAuthToken();

    res.status(201).json({
      result,
      message: "Token was generated successfully",
      token: myToken,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please fill in all the details" });
    }

    const user = await User.findOne({ email }).select("+password");

    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);

      if (validPassword) {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "abhisinghxteam@gmail.com",
            pass: "zplv biax gpyu ssjk",
          },
        });

        const mailOptions = {
          from: "abhisinghxteam@gmail.com",
          to: email,

          subject: "Login Successful",
          text: " 🤎 👌 You have successfull create the resumre Template  👌👌.",
        };
        console.log(email);
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });

        return res.status(201).send({
          user,
          message: "Login was successful",
        });
      } else {
        return res.status(401).send({ message: "Invalid password" });
      }
    } else {
      return res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: "An error occurred",
    });
  }
});

app.post("/sendpasswordlink", async (req, res) => {
  console.log(req.body);
  const { email } = req.body;

  if (!email) {
    return res
      .status(400)
      .json({ status: 400, message: "Please provide your email" });
  }

  try {
    const userFind = await User.findOne({ email: email });

    if (!userFind) {
      return res.status(404).json({ status: 404, message: "User not found" });
    }

    // Generate a token for password reset
    const token = jwt.sign({ _id: userFind._id }, secretKey, {
      expiresIn: "120s",
    });

    const setUserToken = await User.findByIdAndUpdate(
      { _id: userFind._id },
      { verifytoken: token },
      { new: true }
    );

    if (!setUserToken) {
      return res
        .status(500)
        .json({ status: 500, message: "Failed to update user token" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "abhisinghxteam@gmail.com",
        pass: "zplv biax gpyu ssjk",
      },
    });

    // Compose the email message
    const mailOptions = {
      from: "abhisinghxteam@gmail.com",
      to: email,
      subject: "Password Reset",
      html: `Click on the following link to reset your password: <a href="http://localhost:3000/Reset?${userFind.id}?${setUserToken.verifytoken}">Reset Password</a>`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email", error);
        return res.status(500).json({ status: 500, message: "Email not sent" });
      } else {
        console.log("Email sent successfully", info.response);
        return res
          .status(200)
          .json({ status: 200, message: "Email sent successfully" });
      }
    });
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error" });
  }
});

// Verify user for forgot password
app.get("/forgotpassword/:id/:token", async (req, res) => {
  const { id, token } = req.params;

  try {
    const validUser = await User.findOne({ _id: id, verifytoken: token });

    if (validUser) {
      res.status(200).json({ status: 200, validUser });
    } else {
      res.status(401).json({ status: 401, message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
});

// Reset password
app.post("/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  try {
    const validUser = await User.findOne({ _id: id, verifytoken: token });

    if (validUser) {
      const hashedPassword = await bcrypt.hash(password, 12);
      validUser.password = hashedPassword;
      await validUser.save();
      res
        .status(200)
        .json({ status: 200, message: "Password updated successfully" });
    } else {
      res.status(401).json({ status: 401, message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
});

app.get("/dilip", async (req, res) => {
  res.send("ky hal bhai hm live ho gye hai bhai ");
});

//*--------------------------------------------------------------------------------------------------------------------------------------------*//

app.listen(PORT, () => {
  console.log(`sever start at port no ${PORT}`);
});
