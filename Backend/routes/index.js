var express = require("express");
var router = express.Router();
var bcrypt = require("bcryptjs");
var userModel = require("../models/userModel");
var projectModel = require("../models/projectModel");
const jwt = require("jsonwebtoken")
const { authenticateUser } = require("../middlewares/authMiddleware");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

const secret = "secret";

// sign-up new user
router.post("/signup", async (req, res) => {
  let { username, name, email, password } = req.body;
  let emailCon = await userModel.findOne({ email: email });
  if (emailCon) {
   return res.json({ success: false, message: "Email already exists" });
  } else {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        let user = userModel.create({
          username: username,
          name: name,
          email: email,
          password: hash,
        });
       return res.json({ success: true, message: "user created successfully" });
      });
    });
  }
});

// login existing user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await userModel.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    // Generate JWT Token
    const token = jwt.sign({ email: user.email, userId: user._id }, secret, {
      expiresIn: "1h" // Token expiry time
    });

    // Send Response
    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      token: token,
      userId: user._id
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Save project — protected route
router.post("/saveProject", authenticateUser, async (req, res) => {
  const { htmlCode, cssCode, jsCode } = req.body;
  const userId = req.user.userId;

  try {
    const existingProject = await projectModel.findOne({ createdBy: userId });

    if (existingProject) {
      existingProject.htmlCode = htmlCode;
      existingProject.cssCode = cssCode;
      existingProject.jsCode = jsCode;
      await existingProject.save();
    } else {
      await projectModel.create({ createdBy: userId, htmlCode, cssCode, jsCode });
    }

    res.json({ success: true, message: "Project saved successfully" });
  } catch (error) {
    console.error("Save Project Error:", error);
    res.status(500).json({ success: false, message: "Failed to save project" });
  }
});

// Get project — protected route
router.get("/getProject", authenticateUser, async (req, res) => {
  const userId = req.user.userId;

  try {
    const project = await projectModel.findOne({ createdBy: userId });

    if (project) {
      return res.json({
        success: true,
        htmlCode: project.htmlCode,
        cssCode: project.cssCode,
        jsCode: project.jsCode
      });
    }

    res.json({ success: false, message: "No project found" });
  } catch (error) {
    console.error("Get Project Error:", error);
    res.status(500).json({ success: false, message: "Failed to fetch project" });
  }
});
module.exports = router;
