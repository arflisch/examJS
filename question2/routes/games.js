const express = require('express');
const {
  getThreeQuestions,
  getThreeQuestionsWithoutLevel,
  createOneUser,
} = require('../models/games');

const router = express.Router();

router.get('/start/:level', (req, res) => {
  const questionsFound = getThreeQuestions(req.params.level);
  if (!questionsFound) return res.sendStatus(404);
  return res.json(questionsFound);
});

router.get('/start', (req, res) => {
  const questionsFound = getThreeQuestionsWithoutLevel();
  if (!questionsFound) return res.sendStatus(404);
  return res.json(questionsFound);
});

router.post('/', (req, res) => {
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  const score = req?.body?.score?.length !== 0 ? req.body.score : undefined;

  if (!username || !score) return res.sendStatus(400);
  if (score < 0 || score > 3) return res.sendStatus(400);

  const createdUser = createOneUser(username, score);

  return res.json(createdUser);
});

module.exports = router;
