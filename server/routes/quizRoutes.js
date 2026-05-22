import express from "express";
import { listQuizzes, submitQuiz } from "../controllers/quizController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", listQuizzes);
router.post("/:id/submit", protect, submitQuiz);

export default router;
