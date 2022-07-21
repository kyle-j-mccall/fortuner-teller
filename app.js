// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const fortuneArray = ["Yes!",
"Maybe later",
"Trust me, you don't want to know",
"It's hard to say",
"I have a headache. Ask again later",
"Don’t bet on it",
"It is known",
"Meh",
"Probably",
"No",
"It doesn't look good",
"Don't know. Don't care",
"Absolutely",
"Stormy weather ahead",
"I am certain of it",
"That sounds awful",
"Definitely",
"Yes. Break out the champagne",
"Even a blind squirrel finds a nut sometimes",
"So let it be written. So let it be done"]


const askButton = document.getElementById('ask-button');
const askedQuestion = document.getElementById('asked-question');
const answerSection = document.getElementById('answer-section');
const questionSection = document.getElementById('question-section');
const questionDisplay = document.getElementById('question-display');
const answerDisplay = document.getElementById('answer-display');


askButton.addEventListener('click', () => {
  getRandomFortune(fortuneArray);
  console.log(getRandomFortune(fortuneArray));
  toggleVisibility();
  showRandomAnswer();
  showQuestion();
  
});

function showQuestion() {
  const question = askedQuestion.value;
  questionDisplay.textContent = question;
}

function getRandomFortune(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const item = array[randomIndex];
  return item;
}

function toggleVisibility() {
  answerSection.classList.remove('hidden');
  questionSection.classList.add('hidden');
}

function showRandomAnswer() {
  const randomAnswer = getRandomFortune(fortuneArray);
  answerDisplay.textContent = randomAnswer;
}

console.log(questionSection);