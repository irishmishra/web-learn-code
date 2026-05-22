import crypto from "crypto";
import User from "../models/User.js";
import { sendEmail } from "../utils/email.js";
import { sendToken } from "../utils/token.js";

export async function register(req, res, next) {
  try {
    const { name, email, password, role = "student" } = req.body;
    const user = await User.create({ name, email, password, role: role === "admin" ? "student" : role });
    const verificationToken = user.createVerificationToken();
    await user.save({ validateBeforeSave: false });
    await sendEmail({ to: user.email, subject: "Verify your CodeForge account", html: `<p>Use this token to verify your account: ${verificationToken}</p>` });
    sendToken(user, 201, res);
  } catch (error) {
    next(error);
  }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await user.comparePassword(password))) {
      res.status(401);
      throw new Error("Invalid email or password");
    }
    sendToken(user, 200, res);
  } catch (error) {
    next(error);
  }
}

export function logout(_req, res) {
  res.clearCookie("token").json({ message: "Logged out" });
}

export function me(req, res) {
  res.json({ user: req.user.safeProfile ? req.user.safeProfile() : req.user });
}

export async function verifyEmail(req, res, next) {
  try {
    const hashed = crypto.createHash("sha256").update(req.params.token).digest("hex");
    const user = await User.findOne({ emailVerificationToken: hashed });
    if (!user) {
      res.status(400);
      throw new Error("Invalid verification token");
    }
    user.isVerified = true;
    user.emailVerificationToken = undefined;
    await user.save({ validateBeforeSave: false });
    res.json({ message: "Email verified" });
  } catch (error) {
    next(error);
  }
}

export async function forgotPassword(req, res, next) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.json({ message: "If that email exists, reset instructions were sent" });
    const resetToken = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false });
    await sendEmail({ to: user.email, subject: "Reset your CodeForge password", html: `<p>Reset token: ${resetToken}</p>` });
    res.json({ message: "Reset instructions sent" });
  } catch (error) {
    next(error);
  }
}

export async function resetPassword(req, res, next) {
  try {
    const hashed = crypto.createHash("sha256").update(req.params.token).digest("hex");
    const user = await User.findOne({ passwordResetToken: hashed, passwordResetExpires: { $gt: Date.now() } });
    if (!user) {
      res.status(400);
      throw new Error("Invalid or expired reset token");
    }
    user.password = req.body.password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    sendToken(user, 200, res);
  } catch (error) {
    next(error);
  }
}
