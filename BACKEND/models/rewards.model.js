import mongoose from "mongoose";

const RewardSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  uniqueCode: {
    type: String,
    required: true,
    unique: false,
  },
  expires: {
    type: Date,
    required: true,
  },
  image:{
    type: String,
  }
});

const Reward = mongoose.model("Reward", RewardSchema);

export default Reward;
