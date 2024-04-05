function pauseClicked() {
  var button = document.querySelector('.pause_button');
  var icon = button.querySelector('i');

  // Toggle between pause and play icon
  if (icon.classList.contains('bi-pause-fill')) {
    icon.classList.remove('bi-pause-fill');
    icon.classList.add('bi-caret-right-fill');
  } else {
    icon.classList.remove('bi-caret-right-fill');
    icon.classList.add('bi-pause-fill');
  }
}

const fruits = [
  { name: 'apple', color: 'red', image: 'apple.jpg' },
  { name: 'banana', color: 'yellow', image: 'banana.jpg' },
  { name: 'orange', color: 'orange', image: 'orange.jpg' },
  { name: 'mango', color: 'yellow', image: 'mango.jpg' },
  { name: 'pomegranate', color: 'red', image: 'pomegranate.jpg' },
  { name: 'dragon', color: 'pink', image: 'dragon.jpg' },
  { name: 'guava', color: 'green', image: 'guava.jpg' },
];



var currentQuestionIndex = 0;
var score = 0;
var wrongAttempts = 0;
var hearts = 3;

function generateCards() {
  const cardsContainer = document.getElementById('cards');
  cardsContainer.innerHTML = '';
  const question = fruits[currentQuestionIndex];
  const shuffledFruits = fruits.sort(() => Math.random() - 0.5);
  shuffledFruits.forEach(fruit => {
    const card = document.createElement('div');
    card.classList.add('col-6', 'col-sm-4', 'col-md-3', 'col-lg-2');
    const cardContent = `
    <div class="card rounded-4 p-3 mb-3" onclick="selectFruit('${fruit.name}')>
    <img src="./images/${fruit.image}" alt="${fruit.image}" class="w-100 rounded-4">
  </div>

    `;
    card.innerHTML = cardContent;
    cardsContainer.appendChild(card);
  });
}

function selectFruit(selectFruit) {
  const question = fruits[currentQuestionIndex];
  if (selectedFruit === question.name){
    score++;
    document.getElementById('correctCount').textContent = score;
    document.getElementById('next').classList.remove('d-none');
    document.getElementById('tryAgain').classList.add('d-none');
  }else{
    wrongAttempts++;
    document.getElementById('tryAgain').classList.remove('d-none')
    document.getElementById('next').classList.remove('d-none')

  }
}

function tryAgain(){
  generateCards();
  document.getElementById('tryAgain').classList.add('d-none')
  document.getElementById('next').classList.add('d-none')
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= fruits.length) {
    // Game Over
    alert('Congratulations! You have completed the game.');
  } else {
    document.getElementById('question').textContent = `Which fruit is ${fruits[currentQuestionIndex].color}?`;
    generateCards();
    document.getElementById('next').classList.add('d-none');
    document.getElementById('tryAgain').classList.add('d-none');
  }
}


function goHome() {
  // Redirect to home page or perform other actions
}

// Function to handle Resume button click
function resumeGame() {
  // Resume game from paused state
}

// Function to handle Restart button click
function restartGame() {
  // Restart the game
}

// Function to handle Cancel button click on modal
function cancelModal() {
  // Dismiss the modal without any action
}

generateCards();