'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  let totalGameCount = 0;
  let userWinCount = 0;
  let botWinCount = 0;
  let drawCount = 0;

  // * рандомный ход бота
  const getBotRandomFigure = (arr) => {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
  };

  const botFigure = getBotRandomFigure(FIGURES_RUS);

  // * выбор игрока
  const getUserFigure = () => {
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
        getGame();
      }
    }

    // !!! если нажали отменить

    if (choice != null) {
      choice.trim().toLowerCase();

      if (choice[0] === 'н') choice = 'ножницы';
      if (choice[0] === 'к') choice = 'камень';
      if (choice[0] === 'б') choice = 'бумага';

      // * неверный ввод
      if (choice[0] != 'н' && choice[0] != 'б' && choice[0] != 'к') {
        alert(`
        Неверный ввод! 
        Вы ввели ${choice},
        а нужно: 'камень' или 'ножницы' или 'бумага'`);
        getGame();
      }
      return choice;
    }
  };

  // * игра
  const getGame = () => {
    totalGameCount++;

    const userFigure = getUserFigure();

    // * условие победы и увеличение счетчиков
    // !!! Первый блок проверок
    if (botFigure[0] === 'н' && userFigure[0] === 'б') {
      botWinCount++;
      alert(`
        Бот: ${botFigure}
        Игрок: ${userFigure}
        Победил Бот!
        `);
    }

    if (botFigure[0] === 'н' && userFigure[0] === 'н') {
      drawCount++;
      alert(`
        Бот: ${botFigure}
        Игрок: ${userFigure}
        Ничья!
        `);
    }

    if (botFigure[0] === 'н' && userFigure[0] === 'к') {
      userWinCount++;
      alert(`
        Бот: ${botFigure}
        Игрок: ${userFigure}
        Победил Игрок!
        `);
    }

    // * =======
    // !!! Второй блок проверок

    if (botFigure[0] === 'к' && userFigure[0] === 'н') {
      botWinCount++;
      alert(`
        Бот: ${botFigure}
        Игрок: ${userFigure}
        Победил Бот!
        `);
    }

    if (botFigure[0] === 'к' && userFigure[0] === 'к') {
      drawCount++;
      alert(`
        Бот: ${botFigure}
        Игрок: ${userFigure}
        Ничья!
        `);
    }

    if (botFigure[0] === 'к' && userFigure[0] === 'б') {
      userWinCount++;
      alert(`
        Бот: ${botFigure}
        Игрок: ${userFigure}
        Победил Игрок!
        `);
    }

    // * ===
    // !!! Третий блок проверок
    if (botFigure[0] === 'б' && userFigure[0] === 'к') {
      botWinCount++;
      alert(`
        Бот: ${botFigure}
        Игрок: ${userFigure}
        Победил Бот!
        `);
    }

    if (botFigure[0] === 'б' && userFigure[0] === 'б') {
      drawCount++;
      alert(`
        Бот: ${botFigure}
        Игрок: ${userFigure}
        Ничья!
        `);
    }

    if (botFigure[0] === 'б' && userFigure[0] === 'н') {
      userWinCount++;
      alert(`
        Бот: ${botFigure}
        Игрок: ${userFigure}
        Победил Игрок!
        `);
    }

    // * выход из игры или еще партия

    const nextGame = confirm('Еще разок?');
    if (nextGame) {
      getGame();
    } else {
      alert(`Результат игр: 
                  Сыгранно игр: ${totalGameCount}
                  Побед Бота: ${botWinCount}
                  Побед Игрока: ${userWinCount}
                  Ничьих: ${drawCount}
              `);

      totalGameCount = botWinCount = userWinCount = drawCount = 0;
    }
  };

  window.RPS = getGame;
})();
