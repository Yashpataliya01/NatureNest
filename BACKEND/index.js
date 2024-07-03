import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

// Load environment variables from .env file
dotenv.config({
  path: "./.env",
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("🗄️ MongoDB connected successfully"))
.catch((err) => console.error("Failed to connect to MongoDB", err));

// Initialize Express app
const app = express();
const __dirname = path.resolve();

// Middleware
app.use(cors({
  origin: "*",
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/auth", userRoutes);
app.use("/api/post", postRoutes);

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`⚙️ Server is running at port: ${PORT}`);
});
