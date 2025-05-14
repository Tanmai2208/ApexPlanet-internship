
const quizData = [
  {
    question: "Which language runs in a web browser?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    answers: ["Central Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],
    correct: "Cascading Style Sheets"
  },
  {
    question: "What year was JavaScript launched?",
    answers: ["1996", "1995", "1994", "None of the above"],
    correct: "1995"
  }
];

let currentQuiz = 0;
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

function loadQuiz() {
  const quiz = quizData[currentQuiz];
  questionEl.textContent = quiz.question;
  answersEl.innerHTML = "";

  quiz.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => selectAnswer(answer);
    answersEl.appendChild(btn);
  });
}

function selectAnswer(answer) {
  const isCorrect = answer === quizData[currentQuiz].correct;
  alert(isCorrect ? "Correct!" : "Wrong answer!");
}

nextBtn.addEventListener("click", () => {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    alert("Quiz completed!");
    nextBtn.disabled = true;
    questionEl.textContent = "Thanks for playing!";
    answersEl.innerHTML = "";
  }
});

loadQuiz();

const images = [ 
  "file:///C:/Users/Tanmai/OneDrive/Pictures/img2.png",
  "file:///C:/Users/Tanmai/OneDrive/Pictures/img3.png",
  "file:///C:/Users/Tanmai/OneDrive/Pictures/img4.png",
  "file:///C:/Users/Tanmai/OneDrive/Pictures/img5.png"
];

let currentImage = 0;
const carouselImage = document.getElementById("carouselImage");

function showImage(index) {
  carouselImage.src = images[index];
}

function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  showImage(currentImage);
}

function prevImage() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  showImage(currentImage);
}


const getJokeBtn = document.getElementById("getJokeBtn");
const setupEl = document.getElementById("setup");
const punchlineEl = document.getElementById("punchline");

async function fetchJoke() {
  setupEl.textContent = "Fetching a fun joke...";
  punchlineEl.textContent = "";
  punchlineEl.classList.add("hidden");

  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun,Spooky,Christmas?type=twopart&safe-mode");
    const data = await response.json();

    if (data.type === "twopart") {
      setupEl.textContent = data.setup;
      punchlineEl.textContent = data.delivery;
      punchlineEl.classList.remove("hidden");
    } else {
      setupEl.textContent = "No joke found.";
      punchlineEl.classList.add("hidden");
    }
  } catch (error) {
    setupEl.textContent = "Couldn't load a joke this time.";
    punchlineEl.classList.add("hidden");
  }
}

getJokeBtn.addEventListener("click", fetchJoke);


