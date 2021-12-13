'use strict';

// Создайте файл game01.js
// Написать простой игровой бот, который умеет следующее:
// Загадывает число от 1 до 100;
// предлагает пользователю ввести свой вариант отгадки;
// если пользовательское число больше,
// чем загаданное, то бот выводит “Меньше!” и предлагает ввести новый вариант;
// если пользовательское число меньше,
// чем загаданное, то бот выводит “Больше!” и предлагает ввести новый вариант;
// если пользователь вводит правильное число, то бот выводит “Правильно!”;
// если пользователь ввел не число, то выводит “Введи число!”;
// если пользователь нажимает “Отмена”, то игра заканчивается.

// * ============================================ * //
// Задача #1
// Переписать игровой бот из 8-го задания
// Функционал остаётся прежний,
// но вместо цикла (while или for) используйте рекурсию

const game = (num) => {
  const userNumber = +prompt('Загадайте число от 1 до 100');

  if (Number.isNaN(userNumber)) {
    alert('Введи число!');
    game();
  }

  if (userNumber < num) {
    alert('Вы ввели число меньше верного');
    game();
  }
  if (userNumber > num) {
    alert('Вы ввели число больше верного');
    game();
  }
  if (userNumber === num) {
    alert('Верно!!!');
    confirm('Еще разок?') ? game() : alert('Ну ладно');
  }
};
// game(25);


// * ============================================ * //

// Задача #2
// Напишите рекурсивную функцию, которая принимает один параметр массив,
// генерирует целое число от 0 до 10 включительно и добавляет его в массив.
// Каждый раз после добавления нового числа проверяет сумму элементов массива,
// если она меньше 50 запускается снова передавая себе массив.
// Если сумма больше 50-ти, то функция возвращает этот массив

const recurceFunc = (arr = []) => {
  let sum = 0;
  const num = Math.floor(Math.random() * 10 + 1);
  arr.push(num);
  sum = arr.reduce((acc, item) => acc + item);

  if (sum < 50) {
    recurceFunc(arr);
  }
  return arr;
};
// console.log('recurceFunc(array) ', recurceFunc());


// * ============================= * //

// Задания на this (+1 балл)
// Задача #1
// Создать объект rectangle, который описывает ширину и высоту
// (свойства width и height) прямоугольника
// Объект должен иметь 2 сеттера для записи ширины и высоты
//  и два геттера для получения периметра и площади прямоугольника
// По умолчанию значения высоты и ширины заданы 5 единиц

const rectangle = {

  get width_val() {
    return this.width;
  },

  get height_val() {
    return this.height;
  },

  set width_val(val = 5) {
    this.width = val;
  },

  set height_val(val = 5) {
    this.height = val;
  },

  get perimeter() {
    const perimeter = this.height + this.width;
    return perimeter;
  },

  get square() {
    const square = this.height * this.width;
    return square;
  },
};
rectangle.width = 10;
console.log('rectangle.width; ', rectangle.width);
rectangle.height = 10;
console.log('rectangle.height; ', rectangle.height);

console.log(rectangle.perimeter);
console.log(rectangle.square);

