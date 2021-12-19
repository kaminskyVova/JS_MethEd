'use strict';

(() => {
  let langChoice = prompt('Выберети язык игры. RUS или ENG');
  if (langChoice != null) {
    langChoice.trim().toUpperCase();
  } else {
    alert('Вы не можете начать игру если не выберете язык интерфейса!')
    langChoice = prompt('Выберети язык игры. RUS или ENG');
  }

  if (langChoice[0] === 'R') {
    window.RPS('RUS');
  }

  if (langChoice[0] === 'E') {
    window.RPS('ENG');
  }
})();
