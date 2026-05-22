import Quiz from "../models/Quiz.js";

export async function listQuizzes(_req, res, next) {
  try {
    res.json({ quizzes: await Quiz.find().select("-questions.correctAnswer") });
  } catch (error) {
    next(error);
  }
}

export async function submitQuiz(req, res, next) {
  try {
    const quiz = await Quiz.findById(req.params.id);
    const score = quiz.questions.reduce((total, question, index) => total + (req.body.answers[index] === question.correctAnswer ? 1 : 0), 0);
    quiz.leaderboard.push({ user: req.user._id, score });
    await quiz.save();
    res.json({ score, total: quiz.questions.length, leaderboard: quiz.leaderboard });
  } catch (error) {
    next(error);
  }
}
