import User from "../models/authModel.js";
import bcrypt from "bcryptjs";
import { authenticateToken } from "../utils/generateToken.js";
export const signupController = async (req, res) => {
  try {
    const { username, email, fullName, password } = req.body;

    if (!username || !email || !fullName || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with this email" });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      username,
      email,
      fullName,
      password: hash,
    });
    const token = authenticateToken(username,email);
    if(token){

        res.cookie("Access_token", token, { httpOnly: true, maxAge: 15 * 24 * 60 * 60 * 1000 });
    }

    res.status(201).json(newUser);
    console.log(newUser);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};
