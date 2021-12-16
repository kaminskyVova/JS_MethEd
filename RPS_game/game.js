'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const FIGURES_ENG = ['stone', 'scissors', 'paper'];
  let userFigureNum = 0;
  let botFigureNum = 0;
  let totalGameCount = 0;
  let userWinCount = 0;
  let botWinCount = 0;
  let drawCount = 0;

  // * рандомный ход бота
  const getBotRandomFigure = (arr) => {
    const random = Math.floor(Math.random() * arr.length);
    if (arr[random] === 'камень' || arr[random] === 'stone') {
      botFigureNum = 1;
    }
    if (arr[random] === 'ножницы' || arr[random] === 'scissors') {
      botFigureNum = 2;
    }
    if (arr[random] === 'бумага' || arr[random] === 'paper') {
      botFigureNum = 3;
    }
    return arr[random];
  };

  // * выбор игрока
  const getUserFigure = (lang = 'RUS') => {
    if (lang === 'RUS') {
      let choice = prompt('Что вы выбрали?');

      if (choice === null) {
        const exit = confirm('Вы уверены что не хотите играть?');

        if (exit) {
          alert('Ok');
          alert(`Результат игр: 
                Сыгранно игр: ${totalGameCount}
                Побед Бота: ${botWinCount}
                Побед Игрока: ${userWinCount}
                Ничьих: ${drawCount}
            `);
        } else {
          getGame(lang);
        }
      }

      // !!! если нажали отменить

      if (choice != null) {
        choice.trim().toLowerCase();

        if (choice[0] === 'н') {
          choice = 'ножницы';
          userFigureNum = 2;
        }
        if (choice[0] === 'к') {
          choice = 'камень';
          userFigureNum = 1;
        }
        if (choice[0] === 'б') {
          choice = 'бумага';
          userFigureNum = 3;
        }

        // * неверный ввод
        if (choice[0] != 'н' && choice[0] != 'б' && choice[0] != 'к') {
          alert(`
        Неверный ввод! 
        Вы ввели ${choice},
        а нужно: 'камень' или 'ножницы' или 'бумага'`);
          getGame(lang);
        }
        return choice;
      }
    }

    // !!! English
    if (lang === 'ENG') {
      let choice = prompt('What your choice?');

      if (choice === null) {
        const exit = confirm(`Are you sure you don't want to play?`);

        if (exit) {
          alert('Ok');
          alert(`Games result: 
                  Games played: ${totalGameCount}
                  Bot's wings: ${botWinCount}
                  User's wings: ${userWinCount}
                  Draws: ${drawCount}
              `);
        } else {
          getGame(lang);
        }
      }

      // !!! is EXIT

      if (choice != null) {
        choice.trim().toLowerCase();

        if (choice[0] === 's' && choice[1] === 'c') {
          choice = 'scissors';
          userFigureNum = 2;
        }
        if (choice[0] === 's' && choice[1] === 't') {
          choice = 'stone';
          userFigureNum = 1;
        }
        if (choice[0] === 'p') {
          choice = 'paper';
          userFigureNum = 3;
        }

        // * invalid input
        if (choice[0] != 's' && choice[0] != 'p' && choice[0] != 's') {
          alert(`
          Invalid input! 
          You entered: ${choice},
          But you need: 'stone' or 'scissors' or 'paper'`);
          getGame(lang);
        }
        return choice;
      }
    }
  };

  // * игра
  const getGame = (lang = 'RUS') => {
    totalGameCount++;

    let botFigure = '';

    if (lang === 'RUS') {
      botFigure = getBotRandomFigure(FIGURES_RUS);
    }
    if (lang === 'ENG') {
      botFigure = getBotRandomFigure(FIGURES_ENG);
    }

    const userFigure = getUserFigure(lang);
    // 1 камень 2 ножницы 3 бумага
    // * условие победы и увеличение счетчиков
    if (lang === 'RUS') {
      if (
        (userFigureNum === 1 && botFigureNum === 2) ||
        (userFigureNum === 2 && botFigureNum === 3)
      ) {
        userWinCount++;
        alert(`
          Бот: ${botFigure}
          Игрок: ${userFigure}
          Игрок Победил!
          `);
      }
      if (
        (userFigureNum === 3 && botFigureNum === 2) ||
        (userFigureNum === 1 && botFigureNum === 3)
      ) {
        botWinCount++;
        alert(`
          Бот: ${botFigure}
          Игрок: ${userFigure}
          Бот Победил!
          `);
      }
      if (userFigureNum === botFigureNum) {
        drawCount++;
        alert(`
          Бот: ${botFigure}
          Игрок: ${userFigure}
          Ничья!
          `);
      }

      // * выход из игры или еще партия

      const nextGame = confirm('Еще разок?');
      if (nextGame) {
        getGame(lang);
      } else {
        alert(`Результат игр: 
                    Сыгранно игр: ${totalGameCount}
                    Побед Бота: ${botWinCount}
                    Побед Игрока: ${userWinCount}
                    Ничьих: ${drawCount}
                `);
        totalGameCount = botWinCount = userWinCount = drawCount = 0;
      }
    }

    // !!! English
    if (lang === 'ENG') {
      if (
        (userFigureNum === 1 && botFigureNum === 2) ||
        (userFigureNum === 2 && botFigureNum === 3)
      ) {
        userWinCount++;
        alert(`
            Bot: ${botFigure}
            User: ${userFigure}
            User Win!
            `);
      }
      if (
        (userFigureNum === 3 && botFigureNum === 2) ||
        (userFigureNum === 1 && botFigureNum === 3)
      ) {
        botWinCount++;
        alert(`
            Bot: ${botFigure}
            User: ${userFigure}
            Bot Win!
            `);
      }
      if (userFigureNum === botFigureNum) {
        drawCount++;
        alert(`
            Bot: ${botFigure}
            User: ${userFigure}
            Draw!
            `);
      }

      // * Exit game or New game
      const nextGame = confirm('One more time?');
      if (nextGame) {
        getGame(lang);
      } else {
        alert(`Games result: 
                  Games played: ${totalGameCount}
                  Bot's wings: ${botWinCount}
                  User's wings: ${userWinCount}
                  Draws: ${drawCount}
              `);
        totalGameCount = botWinCount = userWinCount = drawCount = 0;
      }
    }
  };

  window.RPS = getGame;
})();
