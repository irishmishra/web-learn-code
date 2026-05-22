import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  language: String,
  timerSeconds: { type: Number, default: 600 },
  questions: [{
    prompt: { type: String, required: true },
    options: [String],
    correctAnswer: String,
    explanation: String
  }],
  leaderboard: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, score: Number, createdAt: { type: Date, default: Date.now } }]
}, { timestamps: true });

export default mongoose.model("Quiz", quizSchema);
