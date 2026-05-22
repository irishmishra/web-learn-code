import mongoose from "mongoose";

const tutorialSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  language: { type: String, required: true },
  level: { type: String, enum: ["beginner", "intermediate", "advanced"], default: "beginner" },
  theory: { type: String, required: true },
  syntaxExample: String,
  outputPreview: String,
  practiceProblems: [{ prompt: String, starterCode: String, solution: String }],
  notesEnabled: { type: Boolean, default: true },
  tags: [String],
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  published: { type: Boolean, default: false },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
}, { timestamps: true });

export default mongoose.model("Tutorial", tutorialSchema);
