'use strict';

(() => {
  let userBallsCount = 5;
  let botBallsCount = 5;

  const getGame = () => {

    // !!! Конец игры
    const endGame = () => {
      if (userBallsCount === 0) {
        console.log('игра окончена');
        alert(`Победил Бот!!!
            количество шариков у бота: ${botBallsCount}
            количество шариков у игрока: ${userBallsCount}
            `);
      }
      if (botBallsCount === 0) {
        alert(`Победил Игрок!!!
            количество шариков у игрока: ${userBallsCount}
            количество шариков у бота: ${botBallsCount}
            `);
      }
    };
    endGame();

    // !!! начало игры
    const startGame = () => {
      if (userBallsCount > 0 && botBallsCount > 0) {
        // !!! 1 раунд ставит игрок
        console.log('===============');
        alert(`ставит игрок угадывает бот`);

        let userBetBalls = +prompt('Ваша ставка');
        // * проверка правельного ввода ставки
        if (
          userBetBalls === null ||
          isNaN(userBetBalls) ||
          userBetBalls > userBallsCount
        ) {
          alert(`Вы вели не верные данные!`);
          userBetBalls = +prompt('Ваша ставка');
        }

        console.log('userBetBalls: ', userBetBalls);
        // я поставил шарики 2
        let botBetBalls = Math.round(Math.random() * (botBallsCount - 1) + 1);
        console.log('botBetBalls: ', botBetBalls);
        // бот должен угадать чет не чет
        const botOddEvenChoice = Math.round(Math.random());
        console.log('botOddEvenChoice: ', botOddEvenChoice);

        // !!! результат раунда

        // * победа игрока
        if (botOddEvenChoice === 0 && !userBetBalls % 2 === 0) {
          userBallsCount += botBetBalls;
          botBallsCount -= botBetBalls;
          //* победа бота
        } else {
          botBallsCount += userBetBalls;
          userBallsCount -= userBetBalls;
        }
        console.log('первый раунд итог');
        console.log('userBallsCount: ', userBallsCount);
        console.log('botBallsCount: ', botBallsCount);
        console.log('==========');

        // !!! 2 раунд ставит бот
        if (userBallsCount > 0 && botBallsCount > 0){
          alert(`ставит бот угадывает игрок`);
          console.log('============');

          botBetBalls = Math.round(Math.random() * (botBallsCount - 1) + 1);
          console.log('botBetBalls: ', botBetBalls);
  
          //* ставка игрока
          userBetBalls = +prompt('Ваша ставка');
          // * проверка правельного ввода ставки
          if (
            userBetBalls === null ||
            isNaN(userBetBalls) ||
            userBetBalls > userBallsCount
          ) {
            alert(`Вы вели не верные данные!`);
            userBetBalls = +prompt('Ваша ставка');
          }
  
          console.log('userBetBalls: ', userBetBalls);
          //* игрок угадывает чет не чет
          let userOddEvenChoice = prompt('Четное не четное').trim().toLowerCase();
          // * проверка правельного ввода чет\не чет
          if (
            userOddEvenChoice === null &&
            userOddEvenChoice[0] != 'ч' &&
            userOddEvenChoice[0] != 'н' &&
            typeof userOddEvenChoice[0] === 'string'
          ) {
            alert(`Нужно выбрать ЧЕТНОЕ или НЕ ЧЕТНОЕ`);
            userOddEvenChoice = prompt('Четное или Не четное')
              .trim()
              .toLowerCase();
          }
          userOddEvenChoice[0] === 'ч'
            ? (userOddEvenChoice = 0)
            : (userOddEvenChoice = 1);
  
          console.log('userOddEvenChoice: ', userOddEvenChoice);

          // * победа игрока
          if (userOddEvenChoice === 0 && botBetBalls % 2 === 0) {
            userBallsCount += botBetBalls;
            botBallsCount -= botBetBalls;
            //* победа бота
          } else {
            botBallsCount += userBetBalls;
            userBallsCount -= userBetBalls;
          }
          console.log('второй раунд итог');
          console.log('userBallsCount: ', userBallsCount);
          console.log('botBallsCount: ', botBallsCount);
        } else {
          console.log('игра окончена');
        }
        startGame()
      }else {
        endGame()
        botBallsCount = userBallsCount = 0;
      }
    };
    startGame();

    userBallsCount = 5;
    botBallsCount = 5;

    function restart() {
      setTimeout(() => {
        alert('Перезапуск игры')
        startGame()
      }, 2000)
    }

    restart()

  };
  window.MRL = getGame;
})();
