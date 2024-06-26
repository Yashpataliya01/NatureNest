import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import User from "../models/user.model.js";
import express from "express";

const app = express();
app.use(cookieParser());

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        return res.status(500).json({ error: "Something went wrong" });
      }
      const newUser = new User({
        username,
        email,
        password: hash,
      });
      await newUser.save();
      res.status(201).json({ message: "Signup successful" });
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

export const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userdata = await User.findOne({ email }); 
    if (!userdata) {
      return res.status(404).json({ error: "User not found" });
    }
    bcrypt.compare(password, userdata.password, function(err, result) {
      if (err) {
        return res.status(500).send('Error comparing passwords');
      }

      if (result) {
        let token = jwt.sign({ email: email}, "shhhhh");
        res.cookie("token", token, { httpOnly: true });
        return res.status(200).json({ message: "Login successful" });
      } else {
        return res.status(401).json({ error: "Invalid credentials" });
      }
    });
  } catch (err) {
    console.error("Signin error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

export const signout = async (req, res) => {
  res.cookie('token', '');
  return res.status(200).json({ message: "Logout successful" });
}