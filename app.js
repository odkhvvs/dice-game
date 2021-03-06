// Toglogchiin eelj xadgalax xuwisagch, 1-r toglogch 0, 2-r toglogchiig 1 geye
var activePlayer;
// Toglogchiin onoo tsugluulax xuwisagch
var scores;
// Tsugluulsan shoo xayax eeljindee tsugluulsan onoog xadgalax xuwisag
var roundScore;
// Togloom duussan esexiig xadgalax xuwisagch
var isNewGame = true;
//Shoonii Domoos yalgaj awax
var diceDom = document.querySelector(".dice");
//Programaa exlexed yamar baixiig beldey
initGame();

// Shoog shidex event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame === true) {
    // 1-6 xurtlex toog gargaj awax
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    // Shoonii zurgiig web deer gargax
    diceDom.style.display = "block";
    // Buusan sanamsargvi shoonii toogoor shoonii zurag gargax
    diceDom.src = "dice-" + diceNumber + ".png";
    // Buusan too ni 1-ees yalgaatai bol idewxitei toglogchiin eeljiin onoog nemegdelvvx
    if (diceNumber !== 1) {
      // 1-ees yalgaatai buuwal toglogchiin xayasan shoonii toonuudiig nemex
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("Togloom duusllaa");
  }
});

// HOLD towchnii event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame === true) {
    // Ug toglogchiin tsugluulsan onoog undsen onoo deer ni nemex
    scores[activePlayer] = scores[activePlayer] + roundScore;
    //   <div class="player-score" id="score-0">10</div>
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    // Ug toglogchiin xojison esexiig shalgax
    if (scores[activePlayer] >= 100) {
      // togloomiig duussan tolowt oruulax
      isNewGame = false;
      // Yalagchiin nernii orond WINNER gesen bicheg gargax
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("Togloom duusllaa");
  }
});

// Ene function ni toglox eeljiig daraagiin toglogchruu shiljuulex
function switchToNextPlayer() {
  //  Toglogchiin shoo 1 buusan tul tsugluulsan toog ni 0 bolgono
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  // 1 buuwal daraagiin toglogchruugaa shoog shiljuulj tsugluulsan toonuudig ustgax
  // xerew idewxitei toglogch 0 bwal 1 bolgoj, 1 baiwal 0 bolgox
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Ulaan tseg shiljuulex code
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Shoog tur alga bolgox
  diceDom.style.display = "none";
}

// Shine togloom exluulex event listener
function initGame() {
  activePlayer = 0;
  scores = [0, 0];
  roundScore = 0;
  isGameOver = false;

  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;

  //Toglogchiin neriig butsaan gargax
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");
  diceDom.style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", initGame);
