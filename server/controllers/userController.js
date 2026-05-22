import User from "../models/User.js";

export async function listUsers(req, res, next) {
  try {
    const page = Number(req.query.page || 1);
    const limit = Math.min(Number(req.query.limit || 20), 100);
    const [users, total] = await Promise.all([
      User.find().skip((page - 1) * limit).limit(limit).sort("-createdAt"),
      User.countDocuments()
    ]);
    res.json({ users, total, page, pages: Math.ceil(total / limit) });
  } catch (error) {
    next(error);
  }
}

export async function updateProfile(req, res, next) {
  try {
    const updates = (({ name, bio, avatar }) => ({ name, bio, avatar }))(req.body);
    const user = await User.findByIdAndUpdate(req.user._id, updates, { new: true, runValidators: true });
    res.json({ user: user.safeProfile() });
  } catch (error) {
    next(error);
  }
}

export async function moderateUser(req, res, next) {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { isActive: req.body.isActive }, { new: true });
    res.json({ user });
  } catch (error) {
    next(error);
  }
}
