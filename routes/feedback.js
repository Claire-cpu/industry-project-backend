import express from "express";
import { addFeedback } from "../controllers/feedback-controller.js";
const router = express.Router();

router.route("/").post(addFeedback);

export default router;
