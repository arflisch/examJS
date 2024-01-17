import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'underscore';
import questions from './utils/questions';


const main = document.querySelector('main');

renderGame();

function renderGame(level){
    let qAndR = '';
    let questionIndex = 0;
    const randomQuestions = getRandomQuestions(questions, level);

    randomQuestions.forEach((question) => {
        qAndR += `<h4>${question.question}</h4>`;
        let answersIndex = 0;

        question.answers.forEach((answer) => {
            qAndR += `<p>${answer.text} <input type='radio' name="${questionIndex}" value="${answersIndex}"></p>`;
            answersIndex+=1;
        });
        questionIndex+=1;
    })

    qAndR += `<button id="calculateBtn" onclick="renderScorePage(randomQuestions)">Calculate my score</button>`;

    main.innerHTML = qAndR;
    main.className = 'p-5';

    const check = document.getElementById("calculateBtn");
    
    check.addEventListener("click", renderScorePage(randomQuestions));
    // check.addEventListener('click', alert('toto'));
}

function renderScorePage(randomQuestions){
    const score = calculateScore(randomQuestions);
    main.innerHTML = `<h4>Your score is ${score} / 3 !</h4>
    <div><button id="replayBtn">Replay</button></div>`;
    const button = document.querySelector('#replayBtn');
    button.addEventListener("click", renderGame());
} 

// eslint-disable-next-line no-shadow
function getRandomQuestions(questions, level){
    if(level){
        const questionLevelled = questions.filter((question) => question.level === level);
        return _.sample(questionLevelled, 3);
    }
    return _.sample(questions, 3);
}

function calculateScore(questionsFiltered) {
    let score = 0;
    const radioButtons = document.querySelectorAll('input');
  
    radioButtons.forEach((radioButton) => {
      if (radioButton.checked) {
        if (questionsFiltered[Number(radioButton.name)].answers[Number(radioButton.value)].isCorrect)
          score += 1;
      }
    });
  
    return score;
  }
