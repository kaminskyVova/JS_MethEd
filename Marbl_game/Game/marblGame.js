'use strict';

(() => {
  let userBallsCount = 5;
  let botBallsCount = 5;

  const getGame = () => {
    // !!! Конец игры
    const endGame = () => {
      if (userBallsCount === 0) {
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

      // !!! 1 раунд ставит игрок
      if (userBallsCount > 0 && botBallsCount > 0) {
        alert(`ставит игрок угадывает бот`);
        let userBetBalls = +prompt('Ваша ставка');

        // * проверка правельного ввода ставки
        if (
          userBetBalls === 0 ||
          isNaN(userBetBalls) ||
          userBetBalls > userBallsCount
        ) {
          alert(`Вы вели не верные данные!`);
          userBetBalls = +prompt('Ваша ставка');
        }

        // * exit
        if (!userBetBalls) {
          const exitChoice = confirm('Вы уверенны что хотите выйти из игры?');
          if (exitChoice) {
            alert('Ok Вы сдались и проиграли!');
            return;
          } else {
            userBetBalls = +prompt('Ваша ставка');
          }
        }

        let botBetBalls = Math.round(Math.random() * (botBallsCount - 1) + 1);
        const botOddEvenChoice = Math.round(Math.random());

        // !!! результат раунда

        // * победа игрока
        if (botOddEvenChoice === 0 && !userBetBalls % 2 === 0) {
          userBallsCount += botBetBalls;
          botBallsCount -= botBetBalls;
          //* победа бота
        } else {
          botBallsCount += userBetBalls;
          userBallsCount -= userBetBalls;
        };

        // !!! 2 раунд ставит бот
        if (userBallsCount > 0 && botBallsCount > 0) {
          alert(`ставит бот угадывает игрок`);

          botBetBalls = Math.round(Math.random() * (botBallsCount - 1) + 1);

          //* ставка игрока
          userBetBalls = +prompt('Ваша ставка');

        
          // * проверка правельного ввода ставки
          if (
            userBetBalls === 0 ||
            isNaN(userBetBalls) ||
            userBetBalls > userBallsCount
          ) {
            alert(`Вы вели не верные данные!`);
            userBetBalls = +prompt('Ваша ставка');
          }

          // * exit
          if (!userBetBalls) {
            const exitChoice = confirm('Вы уверенны что хотите выйти из игры?');
            if (exitChoice) {
              alert('Ok Вы сдались и проиграли!');
              return;
            } else {
              userBetBalls = +prompt('Ваша ставка');
            }
          }

          //* игрок угадывает чет не чет
          let userOddEvenChoice = prompt('Четное не четное');

          if (!userOddEvenChoice) {
            const exitChoice = confirm('Вы уверенны что хотите выйти из игры?');
            if (exitChoice) {
              alert('Ok Вы сдались и проиграли!');
              return;
            } else {
              userOddEvenChoice = prompt('Четное не четное');
            }
          } else if (userOddEvenChoice) {
            userOddEvenChoice = prompt('Четное не четное').trim().toLowerCase();
          }

          // * проверка правельного ввода чет\не чет
          if (userBallsCount) {
            if (
              userOddEvenChoice === 0 &&
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
          }

          // * победа игрока
          if (userOddEvenChoice === 0 && botBetBalls % 2 === 0) {
            userBallsCount += botBetBalls;
            botBallsCount -= botBetBalls;
            //* победа бота
          } else {
            botBallsCount += userBetBalls;
            userBallsCount -= userBetBalls;
          }
        } else {
          console.log('игра окончена');
        }
        startGame();
      } else {
        endGame();
        botBallsCount = userBallsCount = 0;
      }
    };
    startGame();

    userBallsCount = 5;
    botBallsCount = 5;

    function restart() {
      setTimeout(() => {
        alert('Перезапуск игры');
        startGame();
      }, 2000);
    }

    restart();
  };
  window.MRL = getGame;
})();
