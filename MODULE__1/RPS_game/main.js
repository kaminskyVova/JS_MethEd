'use strict';

(() => {
  let langChoice = prompt('Выберети язык игры. RUS или ENG');

  if (
    (langChoice[0] != 'r' ||
    langChoice[0] != 'R') &&
    (langChoice[0] != 'E' ||
    langChoice[0] != 'e') &&
    !langChoice
    ) {
    console.log('langChoice: ', langChoice);
    alert('Для начала игры нужно выбрать язык!');
    langChoice = prompt('Выберети язык игры. RUS или ENG');
  } else {
    langChoice.trim();
  }

  if (langChoice[0] === 'R' || langChoice[0] === 'r') {
    window.RPS('RUS');
  }

  if (langChoice[0] === 'E' || langChoice[0] === 'e') {
    window.RPS('ENG');
  }
})();
