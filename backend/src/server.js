import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.router.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use("/api/auth", messageRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
