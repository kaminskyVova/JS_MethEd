'use strict';

const startGame = window.RPS();
// console.log('startGame: ', startGame);
startGame()

// const getLangChoiceAndStartGame = () => {
//   const langChoice = prompt('Выберети язык игры. RUS или ENG').trim().toUpperCase();
//   let startGame = null;

//   if (langChoice[0] === 'R') {
//     startGame = window.RPS('RUS');
//   }

//   if (langChoice[0] === 'E') {
//     startGame = window.RPS('ENG');
//   }

//   startGame();
// };
// getLangChoiceAndStartGame()