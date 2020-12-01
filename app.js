let randomNamber = Math.floor(Math.random() * 101);
console.log(randomNamber);

const userInput = document.getElementById("number");
const submitBtn = document.querySelector(".validateBtn");
const textToPlayer = document.querySelector(".info .hiOrLow");
const history = document.querySelector(".info .history");
const container = document.querySelector(".container");

let guessCount = 0;
// let resetButton;

const match = () => {
  let userNumber = parseInt(userInput.value,10);
  history.innerText += "  " + userInput.value;
  userInput.value = "";

  const gameOver = () => {
    userInput.disabled = true;
    submitBtn.disabled = true;
    submitBtn.style.cursor = "default";
    const resetBtn = document.createElement("button");
    resetBtn.classList.add("resetBtn");
    resetBtn.textContent = "Start New Game ";

    container.appendChild(resetBtn);

    const resetGame = () => {
      guessCount = 0;
      userInput.disabled = false;
      submitBtn.disabled = false;
      history.innerText = "";
      submitBtn.style.cursor = "pointer";
      userInput.focus();
      textToPlayer.innerText = "Let's play! You have 10 tries.";
      textToPlayer.style.color = "whitesmoke";
      randomNamber = Math.floor(Math.random() * 101);
      console.log(randomNamber);
      container.removeChild(resetBtn);
    };
    resetBtn.addEventListener("click", resetGame);
  };

  if (userNumber === randomNamber) {
    textToPlayer.innerText = "YOU WIN!";
    textToPlayer.style.color = "yellow";
    gameOver();
  } else if (userNumber < randomNamber) {
    textToPlayer.innerText = "Too low, try again";
    textToPlayer.style.color = "orange";
    guessCount++;
  } else if (userNumber > randomNamber) {
    textToPlayer.innerText = "Too high, try again";
    textToPlayer.style.color = "pink";
    guessCount++;
  }
  if (guessCount === 10) {
    textToPlayer.innerText = "GAME OVER";
    textToPlayer.style.color = "red";
    gameOver();
  }
  userInput.focus();
};

submitBtn.addEventListener("click", match);
userInput.addEventListener('keypress',(e)=>{
    if(e.key==="Enter"){
      e.preventDefault()
      submitBtn.click();
    }
  }
)

