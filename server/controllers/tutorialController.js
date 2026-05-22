import Tutorial from "../models/Tutorial.js";

export async function listTutorials(req, res, next) {
  try {
    const query = req.query.search ? { $text: { $search: req.query.search } } : {};
    const tutorials = await Tutorial.find(query).sort("-createdAt").limit(80);
    res.json({ tutorials });
  } catch (error) {
    next(error);
  }
}

export async function createTutorial(req, res, next) {
  try {
    const tutorial = await Tutorial.create({ ...req.body, author: req.user._id });
    res.status(201).json({ tutorial });
  } catch (error) {
    next(error);
  }
}

export async function updateTutorial(req, res, next) {
  try {
    const tutorial = await Tutorial.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.json({ tutorial });
  } catch (error) {
    next(error);
  }
}

export async function deleteTutorial(req, res, next) {
  try {
    await Tutorial.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
}
