import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import tutorialRoutes from "./routes/tutorialRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
import communityRoutes from "./routes/communityRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import { sanitizeInput } from "./middleware/sanitizeMiddleware.js";

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173", credentials: true }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, limit: 250, standardHeaders: true, legacyHeaders: false }));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(sanitizeInput);
if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));

app.get("/api/health", (_req, res) => res.json({ ok: true, service: "codeforge-api" }));
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/tutorials", tutorialRoutes);
app.use("/api/quizzes", quizRoutes);
app.use("/api/community", communityRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
