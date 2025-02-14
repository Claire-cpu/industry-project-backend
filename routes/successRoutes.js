import express from "express";
import * as successController from "../controllers/success-controller.js";

const router = express.Router();

router.route("/").get(successController.getAllStories);

export default router;