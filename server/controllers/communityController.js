import Post from "../models/Post.js";

export async function listPosts(_req, res, next) {
  try {
    res.json({ posts: await Post.find().populate("author", "name avatar").sort("-createdAt") });
  } catch (error) {
    next(error);
  }
}

export async function createPost(req, res, next) {
  try {
    const post = await Post.create({ ...req.body, author: req.user._id });
    res.status(201).json({ post });
  } catch (error) {
    next(error);
  }
}

export async function addComment(req, res, next) {
  try {
    const post = await Post.findById(req.params.id);
    post.comments.push({ body: req.body.body, author: req.user._id });
    await post.save();
    res.status(201).json({ post });
  } catch (error) {
    next(error);
  }
}
