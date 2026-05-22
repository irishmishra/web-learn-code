import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  body: { type: String, required: true, maxlength: 1200 },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
}, { timestamps: true });

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 140 },
  body: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  tags: [String],
  comments: [commentSchema],
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  isModerated: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model("Post", postSchema);
