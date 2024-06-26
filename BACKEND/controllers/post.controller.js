import cookieParser from "cookie-parser";
import Reward from "../models/rewards.model.js";
import User from "../models/user.model.js";
import express from "express";

const app = express();
app.use(cookieParser());

export const create = async (req, res, next) => {
  let {name, details, uniqueCode, expires, image} = req.body;
  let user = await User.findOne({email: req.user.email});

  let myReward = await Reward.create({
    user: user._id,
    name,
    details,
    uniqueCode,
    expires,
    image
  })

  user.rewards.push(myReward);
  await user.save();
  return res.status(200).json({ message: "Thanks For Your Support" });
};

export const getdata = async (req, res, next) => {
  try {
    const myRewards = await Reward.find({});
    res.status(200).json({ count: myRewards.length });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getuserpost = async (req, res, next) => {
  try {
    let user = await User.findOne({ email: req.user.email }).populate("rewards");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user); 
  } catch (error) {
    next(error); 
  }
};