import bcrypt from "bcryptjs";
import crypto from "crypto";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 80 },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, minlength: 8, select: false },
  role: { type: String, enum: ["student", "instructor", "admin"], default: "student" },
  avatar: String,
  bio: String,
  isVerified: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  progress: [{ tutorial: { type: mongoose.Schema.Types.ObjectId, ref: "Tutorial" }, completed: Boolean, percent: { type: Number, default: 0 } }],
  savedSnippets: [{ title: String, language: String, code: String, createdAt: { type: Date, default: Date.now } }],
  quizScores: [{ quiz: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz" }, score: Number, total: Number, createdAt: { type: Date, default: Date.now } }],
  bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tutorial" }],
  emailVerificationToken: String,
  passwordResetToken: String,
  passwordResetExpires: Date
}, { timestamps: true });

userSchema.pre("save", async function hashPassword(next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = function comparePassword(candidate) {
  return bcrypt.compare(candidate, this.password);
};

userSchema.methods.safeProfile = function safeProfile() {
  return { id: this._id, name: this.name, email: this.email, role: this.role, avatar: this.avatar, isVerified: this.isVerified };
};

userSchema.methods.createVerificationToken = function createVerificationToken() {
  const token = crypto.randomBytes(32).toString("hex");
  this.emailVerificationToken = crypto.createHash("sha256").update(token).digest("hex");
  return token;
};

userSchema.methods.createPasswordResetToken = function createPasswordResetToken() {
  const token = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto.createHash("sha256").update(token).digest("hex");
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  return token;
};

export default mongoose.model("User", userSchema);
