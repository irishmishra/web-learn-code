import express from "express";
import { body } from "express-validator";
import { forgotPassword, login, logout, me, register, resetPassword, verifyEmail } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/validate.js";

const router = express.Router();

router.post("/register", [
  body("name").trim().isLength({ min: 2 }).withMessage("Name is required"),
  body("email").isEmail().normalizeEmail().withMessage("Valid email is required"),
  body("password").isLength({ min: 8 }).withMessage("Password must be at least 8 characters"),
  body("role").optional().isIn(["student", "instructor", "admin"])
], validate, register);
router.post("/login", [body("email").isEmail(), body("password").notEmpty()], validate, login);
router.post("/logout", logout);
router.get("/me", protect, me);
router.post("/forgot-password", [body("email").isEmail()], validate, forgotPassword);
router.post("/reset-password/:token", [body("password").isLength({ min: 8 })], validate, resetPassword);
router.get("/verify-email/:token", verifyEmail);

export default router;
