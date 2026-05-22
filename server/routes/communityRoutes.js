import express from "express";
import { addComment, createPost, listPosts } from "../controllers/communityController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/posts", listPosts);
router.post("/posts", protect, createPost);
router.post("/posts/:id/comments", protect, addComment);

export default router;
