import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import feedbackRoute from "./routes/feedback.js";

import questionsRoutes from "./routes/questionsRoutes.js"

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.use("/feedback", feedbackRoute);

app.get("/", (req, res) => {
  res.send("Welcome to the Industry API!!");
});

app.use("/api/questions", questionsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
