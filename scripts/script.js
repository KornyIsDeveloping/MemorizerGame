//MENU FUNCTIONALITY  
//hideing all elements in main menu window
document.getElementById('game').style.display = 'none';
document.getElementById('inputNameForSinglePlayer').style.display = 'none';
document.getElementById('inputNameForMultiPlayer').style.display = 'none';
document.getElementById('settingGame').style.display = 'none';
document.getElementById('gameStatusSinglePlayer').style.display = 'none';
document.getElementById('gameStatusMultiPlayer1').style.display = 'none';
document.getElementById('gameStatusMultiPlayer2').style.display = 'none';
document.getElementById('gameButtons').style.display = 'none';

//single player button from main menu window
document.getElementById('SinglePlayer').onclick = () => {
  //hide main menu 
  document.querySelector('.mainMenu').style.display = 'none';
  //show input form for single player
  document.querySelector('.inputNameSinglePlayer').style.display = 'flex';
};

//play button from single player window
document.getElementById('playSinglePlayer').onclick = () => {
  //hide input from single player window
  document.querySelector('.inputNameSinglePlayer').style.display = 'none';
  //show game board window
  document.querySelector('.gameBoard').style.display = 'unset';
  //show game status for single player
  document.querySelector('.displayNameSinglePlayer').style.display = 'unset';
  //store input for single player and display it on game board
  let addNameSinglePlayer = document.getElementById('playerNameSingle').value;
  document.getElementById('outpuNameSinglePlayer').innerHTML = addNameSinglePlayer;
  //show in game buttons
  document.querySelector('.inGameButtons').style.display = 'unset';
  
  //showing selected theme 1 (Panzer IV)
  // if(themeType1 == 'theme 1 selected') {

  // }
};

//menu button from single player window
document.getElementById('menuSinglePlayer').onclick = () => {
  //hide input for single player window
  document.querySelector('.inputNameSinglePlayer').style.display = 'none';
  //show main menu window
  document.querySelector('.mainMenu').style.display = 'unset';
};

//multi player button from main menu window
document.getElementById('MultiPlayer').onclick = () => {
  //hide main menu window
  document.querySelector('.mainMenu').style.display = 'none';
  //show input for multi player window
  document.querySelector('.inputNameMultiPlayer').style.display = 'flex';
};

//play button from multi player window
document.getElementById('playMultiPlayer').onclick = () => {
  //hide input from multi player window
  document.querySelector('.inputNameMultiPlayer').style.display = 'none';
  //show game board window
  document.querySelector('.gameBoard').style.display = 'unset';
  //show game status for multi player
  document.querySelector('.displayNameMultiPlayer1').style.display = 'unset';
  //store input for multi player and display it on game board
  let addNameMultiPlayer1 = document.getElementById('playerNameMulti1').value;
  document.getElementById('outpuNameMultiPlayer1').innerHTML = addNameMultiPlayer1;
  //show game status for multi player
  document.querySelector('.displayNameMultiPlayer2').style.display = 'unset';
  //store input for single player and display it on game board
  let addNameMultiPlaye2 = document.getElementById('playerNameMulti2').value;
  document.getElementById('outpuNameMultiPlayer2').innerHTML = addNameMultiPlaye2;
  //show in game buttons
  document.querySelector('.inGameButtons').style.display = 'unset';
};

//menu button from multi player window
document.getElementById('menuMultiPlayer').onclick = () => {
  //hide input for multi player window
  document.querySelector('.inputNameMultiPlayer').style.display = 'none';
  //show main menu window
  document.querySelector('.mainMenu').style.display = 'unset';
};

//settings button from main menu window
document.getElementById('Settings').onclick = () => {
  //hide main menu window
  document.querySelector('.mainMenu').style.display = 'none';
  //show settings menu winodw
  document.querySelector('.settings').style.display = 'unset';
};

//menu buttom from settings window
document.getElementById('settingsMenu').onclick = () => {
  //hide settings menu window
  document.querySelector('.settings').style.display = 'none';
  //show main menu window
  document.querySelector('.mainMenu').style.display = 'unset';
};

//refresh button
document.getElementById('refreshTable').onclick = () => {
  counter = 0;
  playerOneMoves = 0;
  playerTwoMoves = 0;
  playerTurn = 0;

  cleanTable();
  createGrid();
};

//creating function to clean the game board
function cleanTable() {
  document.querySelector('.grid').textContent = "";
  document.getElementById('flipsSinglePlayer').textContent = 0;
  document.getElementById('flipsMultiPlayer1').textContent = 0;
  document.getElementById('flipsMultiPlayer2').textContent = 0;
} 

//menu button from game board window
document.getElementById('menu').onclick = () => {
  //hide game board window
  document.querySelector('.gameBoard').style.display = 'none';
  //hide game status for single player
  document.querySelector('.displayNameSinglePlayer').style.display = 'none';
  //hide game status for multi player
  document.querySelector('.displayNameMultiPlayer1').style.display = 'none';
  document.querySelector('.displayNameMultiPlayer2').style.display = 'none';
  //hide in game buttons
  document.querySelector('.inGameButtons').style.display = 'none';
  //show main menu window
  document.querySelector('.mainMenu').style.display = 'unset';
};

//3x4 button from settings window
document.getElementById('gameMode3x4').onclick = () => {
  grid3x4 = 1;
  console.log(grid3x4);
};

//4x4 button from settings window
document.getElementById('gameMode4x4').onclick = () => {
  grid4x4 = 2;
  console.log(grid4x4);
};

//theme 1 (Panzer IV) button from settings window
document.getElementById('cardsTheme1').onclick = () => {
  themeOne = 'theme 1 selected';
  console.log(themeOne);
};

//theme 2 (Halloween) button from settings window
document.getElementById('cardsTheme2').onclick = () => {
  themeTwo = 'theme 2 selected';
  console.log(themeTwo);
};

//theme 3 (no name) button from settings window
document.getElementById('cardsTheme3').onclick = () => {
  themeThree = 'theme 3 selected';
  console.log(themeThree);
};

//theme 4 (no ...) button from settings window
document.getElementById('cardsTheme4').onclick = () => {
  themeFour = 'theme 4 selected';
  console.log(themeFour);
};

// Cards data
const cardsGameArray = [
    {
      name: 'asistAward',
      img: '../images/asistAward.png',
    },
    {
      name: 'attackerAward',
      img: '../images/attackerAward.png',
    },
    {
      name: 'boatstrikeAward',
      img: '../images/boatstrikeAward.png',
    },
    {
      name: 'bombAward',
      img: '../images/bombAward.png',
    },
    {
      name: 'eagleAward',
      img: '../images/eagleAward.png',
    },
    {
      name: 'missionAward',
      img: '../images/missionAward.png',
    },
    {
      name: 'onhandAward',
      img: '../images/onhandAward.png',
    },
    {
      name: 'skillAward',
      img: '../images/skillAward.png',
    },
    // {
    //   name: 'solgerAward',
    //   img: '../images/solgerAward.png',
    // },
    // {
    //   name: 'tankrescuerAward',
    //   img: '../images/tankrescuerAward.png',
    // },
    // {
    //   name: 'tankstrikeAward',
    //   img: '../images/tankstrikeAward.png',
    // },
    // {
    //   name: 'teamworkAward',
    //   img: '../images/teamworkAward.png',
    // },
]
//VARIABLES
//storing the counter and guesses 
let firstGuess = '';
let secondGuess = '';
let count = 0;

//multi player variables
// let player1Turn = true;


//previous target selecting once
let previousTarget = null;

//delay 
let delay = 1200;

//flips counter
let counter = 0;
let playerOneMoves = 0;
let playerTwoMoves = 0 ;
let playerTurn = 0;

//board types
let boardType3x4;
let boardType4x4;

//themes types
// let themeType1;
// let themeType2;
// let themeType3;
// let themeType4;

//dublicating array to create a match for each card
let gameGrid = cardsGameArray.concat(cardsGameArray);

//randomizing game grid on each load
gameGrid.sort(() => 0.5 - Math.random());

//displaying cards
const game = document.getElementById('game');

//create a section with a class of grid
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

//append the grid section to the game div
game.appendChild(grid);


function createGrid() {

  //looping through each item in the game grid
  gameGrid.forEach((item) => {
  //creating a div for each card from the array
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = item.name

  //creating the front of the card
  const front = document.createElement('div');
  front.classList.add('front');

  //creating the back of the card
  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${item.img})`;

  //appending card to grid, front and back to each card
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);

  //applying a card class for created div
  card.classList.add('card');

  //setting the data-name attribute of the div to the cardsGameArray name
  card.dataset.name = item.name;

  //adding the background image of the div to the cardsGameArray
  card.style.backgroundImage = `url(${item.img})`;

  //append the div to the grid section
  grid.appendChild(card);
  });
}
createGrid();

//adding event listener to the entire grid 
//add event listener to grid
grid.addEventListener('click', function(event) {
  //event target is the clicked item
  let clicked = event.target;

  //grid will not select itself
  //only select divs inside the grid
  if(clicked.nodeName === 'SECTION' || clicked === previousTarget ||
   clicked.parentNode.classList.contains('selected') || 
   clicked.parentNode.classList.contains('match')) {
    return;
  }

  if(playerTurn % 2 === 0) {

    if(count < 2) {
      count++;
      if(count === 1) {
        //assign first guess
        firstGuess = clicked.parentNode.dataset.name;
        console.log(firstGuess);
        //adding selected classes
        clicked.parentNode.classList.add('selected'); 
        //adding the counter after each move for single player
        counter++;
        playerOneMoves++;
      }
      else {
        //assign second guess
        secondGuess = clicked.parentNode.dataset.name;
        console.log(secondGuess);
        //adding selected classes
        clicked.parentNode.classList.add('selected');
      }
      //if both guess are not empty
      if (firstGuess !== '' && secondGuess !== '') {
        //if the first guess matches the second match
        if (firstGuess === secondGuess) {
          //running the match function with setted delay
          setTimeout(match, delay);
          //adding the reset guesses function with delay
          setTimeout(resetGuesses, delay);
        }
        else {
          //adding the reset guesses function with delay
          setTimeout(resetGuesses, delay);
        }
        //selecting the flips element by id and displaying it on game board
        document.getElementById('flipsSinglePlayer').textContent = counter;
        document.getElementById('flipsMultiPlayer1').textContent = playerOneMoves;
        document.getElementById('flipsMultiPlayer2').textContent = playerTwoMoves;
      }
      //setting previous target to clicked
      previousTarget = clicked;
      if(count === 2) playerTurn++;
    }
  }else {
    if(count < 2) {
      count++;
      if(count === 1) {
        //assign first guess
        firstGuess = clicked.parentNode.dataset.name;
        console.log(firstGuess);
        //adding selected classes
        clicked.parentNode.classList.add('selected'); 
        //adding the counter after each move for single player
        counter++;
        playerTwoMoves++;
      }
      else {
        //assign second guess
        secondGuess = clicked.parentNode.dataset.name;
        console.log(secondGuess);
        //adding selected classes
        clicked.parentNode.classList.add('selected');
      }
      //if both guess are not empty
      if (firstGuess !== '' && secondGuess !== '') {
        //if the first guess matches the second match
        if (firstGuess === secondGuess) {
          //running the match function with setted delay
          setTimeout(match, delay);
          //adding the reset guesses function with delay
          setTimeout(resetGuesses, delay);
        }
        else {
          //adding the reset guesses function with delay
          setTimeout(resetGuesses, delay);
        }
        //selecting the flips element by id and displaying it on game board
        document.getElementById('flipsMultiPlayer1').textContent = playerOneMoves;
        document.getElementById('flipsMultiPlayer2').textContent = playerTwoMoves;
        document.getElementById('flipsSinglePlayer').textContent = counter;
      }
      //setting previous target to clicked
      previousTarget = clicked;
      if(count === 2) playerTurn++;
    }
  }

  
});

//adding css for the match 
const match = () => {
  let selected = document.querySelectorAll('.selected');
  selected.forEach((card) => {
    card.classList.add('match');
  })
};

//reset guess count after 2 pair of cards
//allowing multiple guesses by reseting the counter after 2 guesses

//reset guesses function
const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  
  let selected = document.querySelectorAll('.selected');
  selected.forEach((card) => {
    card.classList.remove('selected');
  })
};

//refresh function 
