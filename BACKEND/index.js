import express from "express"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import userRoutes from "./routes/auth.route.js"
import postRoutes from "./routes/post.route.js"
import cors from "cors";

mongoose.connect("mongodb://127.0.0.1:27017/bookstore")

const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.listen(3002)

app.use("/api/auth", userRoutes);
app.use("/api/post", postRoutes);