import express from "express";
import { listUsers, moderateUser, updateProfile } from "../controllers/userController.js";
import { authorize, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, authorize("admin"), listUsers);
router.patch("/me", protect, updateProfile);
router.patch("/:id/moderate", protect, authorize("admin"), moderateUser);

export default router;
