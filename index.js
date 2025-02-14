import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import feedbackRoute from "./routes/feedback.js";

import questionsRoutes from "./routes/questionsRoutes.js";
import successRoutes from "./routes/successRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.use("/feedback", feedbackRoute);
app.use("/images", express.static("./public/images"));

app.get("/", (req, res) => {
  res.send("Welcome to the Industry API!!");
});

app.use("/api/questions", questionsRoutes);
app.use("/api/success", successRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
