'use strict';

// Первая задача
// В отдельном файле hard_task_01
// Напишите функцию, вычисляющую наибольший общий делитель двух чисел

const largerDevisor = (a, b) => {
  alert('First task');
  a = +prompt('Enter first number');
  b = +prompt('Enter second number');
  a = Math.abs(a);
  b = Math.abs(b);
  if (b > a) {
    const temp = a;
    a = b;
    b = temp;
  }
  while (true) {
    if (b === 0) return a;
    a %= b;
    if (a === 0) return b;
    b %= a;
  }
};

console.log('largerDevisor: ', largerDevisor());

// Вторая задача
// В отдельном файле hard_task_02
// Получите от пользователя 2 числа
// Напишите функцию нахождения минимального числа,
// без использования условного оператора, циклов и массивов
// Не используйте Math.max и Math.min

const minNumber = (a, b) => {
  alert('Second task');
  a = +prompt('Enter first number');
  b = +prompt('Enter second number');

  if (a - b > 0) {
    return b;
  } else {
    return a;
  }
};

console.log('minNumber: ', minNumber());
