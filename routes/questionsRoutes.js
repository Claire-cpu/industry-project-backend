import express from "express";
import * as questionsController from "../controllers/questions-controller.js";

const router = express.Router();

router.route("/").get(questionsController.getAllQuestions);

export default router;
