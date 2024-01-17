const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/questions.json');
const jsongamesPath = path.join(__dirname, '/../data/games.json');

function getThreeQuestions(level) {
  const questions = parse(jsonDbPath);
  const QuestionsFound = questions.filter((question) => question.level === level);
  if (QuestionsFound < 0) return undefined;
  return QuestionsFound.slice(0, 3);
}

function getThreeQuestionsWithoutLevel() {
  const questions = parse(jsonDbPath);
  if (questions < 0) return undefined;
  return questions.slice(0, 3);
}

function createOneUser(username, score) {
  const gamesUser = parse(jsongamesPath);
  const createdUser = {
    username,
    score,
    date: new Date(),
  };
  gamesUser.push(createdUser);
  serialize(jsongamesPath, gamesUser);
  return createdUser;
}

module.exports = {
  getThreeQuestions,
  getThreeQuestionsWithoutLevel,
  createOneUser,
};
