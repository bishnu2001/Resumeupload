const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../model/user.model");

module.exports.signup = async (req, res) => {
  const { email, password,role } = req.body;

  // Hash the password
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Create a new user
  const newUser = new User({ email, password: hashedPassword,role });

  try {
    // Save the new user
    await newUser.save();
    return res.status(201).json({ success: "User created successfully!" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
module.exports.signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const validuser = await User.findOne({ email });
    if (!validuser) return res.status(400).json({ message: "User not found" });
    const validpassword = bcrypt.compareSync(password, validuser.password);
    if (!validpassword)
      return res.status(400).json({ message: "Wrong credentials!" });
    const token = jwt.sign({ id: validuser._id }, process.env.SECRET_KEY);
    const { password: pass, ...rest } = validuser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ success: true, ...rest, message: "User successfully signed in" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
