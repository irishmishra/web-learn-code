import express from "express";
import { createTutorial, deleteTutorial, listTutorials, updateTutorial } from "../controllers/tutorialController.js";
import { authorize, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", listTutorials);
router.post("/", protect, authorize("instructor", "admin"), createTutorial);
router.patch("/:id", protect, authorize("instructor", "admin"), updateTutorial);
router.delete("/:id", protect, authorize("admin"), deleteTutorial);

export default router;
