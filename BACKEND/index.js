import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

mongoose.connect(process.env.MONGO_URL);

const app = express();
const __dirname = path.resolve();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/dist", "index.html"));
  });
}

app.listen(process.env.PORT || 8000, () => {
  console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
});

app.use("/api/auth", userRoutes);
app.use("/api/post", postRoutes);
