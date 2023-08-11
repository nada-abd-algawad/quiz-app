const welcomQuiz = document.querySelector('.welcom-quiz');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const questionText = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const submitButton = document.getElementById('submit-btn');
const leaderButton = document.getElementById('leader-btn');
const resultText = document.getElementById('result-text');
const startButton = document.getElementById('start-button');
const nameInput = document.querySelector('#name');
const pEroor = document.querySelector('.error-input');
const countNumber = document.querySelector('.count_que');
const tableLeader = document.querySelector('#leaderboard-container');





let currentQuestionIndex = 0;
let score = 0;







 // startButton
  startButton.addEventListener('click',()=>{

    pEroor.textContent = '';

    if(nameInput.value === ""){
    pEroor.textContent ='name!!';

    }

    if(nameInput.value != ""){
     pEroor.textContent ='';
     welcomQuiz.style.display = 'none';
      quizContainer.style.display = 'block';
      startQuiz();
   
    }
   
   
  });


// Function to initialize the quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
 
  
}


// Function to display a question and its options
function showQuestion() {




     const question = quizData[currentQuestionIndex];
     questionText.textContent = question.question;


    countNumber.innerHTML = currentQuestionIndex+1;


  optionsContainer.innerHTML = '';
  for (let i = 0; i < question.options.length; i++) {
    const option = document.createElement('button');
    option.textContent = question.options[i];
    option.addEventListener('click', selectOption);
    optionsContainer.appendChild(option);
  }
}

// Function to check option selection
function selectOption(event) {
  const selectedOption = event.target;
  const selectedAnswer = selectedOption.textContent;
  const question = quizData[currentQuestionIndex];

  if (selectedAnswer === question.correctAnswer) {
    selectedOption.classList.add('correct');
    score++;

 
  
   
  } else {
    selectedOption.classList.add('incorrect');
  }

  disableOptions();
  submitButton.disabled = false;
}

// Function to disable options after selection
function disableOptions() {
  const options = optionsContainer.getElementsByTagName('button');
  for (let i = 0; i < options.length; i++) {
    options[i].disabled = true;
  }
}

// Function to handle submit button click
submitButton.addEventListener('click', function() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
    submitButton.disabled = true;
  } else {
    showResult();
  }
});

// Function to display the quiz result
function showResult() {
  quizContainer.style.display = 'none';
  resultContainer.style.display = 'block';
  resultText.textContent = `You scored : ${score} / ${quizData.length} `;
 
  // LeaderBoardButton
  leaderButton.addEventListener('click', ()=>{
    resultContainer.style.display = 'none';
    tableLeader.style.display = 'block';

    
    const player = {
      name: nameInput.value,
      score: score,
    };

    addToLeaderboard(player);
    displayLeaderboard();
    saveQuizAppState();
    
  });
}




