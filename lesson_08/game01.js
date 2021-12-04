"use strict";

// Создайте файл game01.js
// Написать простой игровой бот, который умеет следующее:
// Загадывает число от 1 до 100;
// предлагает пользователю ввести свой вариант отгадки;
// если пользовательское число больше, чем загаданное, то бот выводит “Меньше!” и предлагает ввести новый вариант;
// если пользовательское число меньше, чем загаданное, то бот выводит “Больше!” и предлагает ввести новый вариант;
// если пользователь вводит правильное число, то бот выводит “Правильно!”;
// если пользователь ввел не число, то выводит “Введи число!”;
// если пользователь нажимает “Отмена”, то игра заканчивается.

{
    const getStartGame = () => {
        let userNumber = +prompt("Загадайте число от 1 до 100");
        const correctNumber = 33;

        if (Number.isNaN(userNumber)) {
            alert("Введи число!");
            userNumber = +prompt("Загадайте число от 1 до 100");
        }

        if (userNumber > correctNumber) {
            alert("Меньше!");
            userNumber = +prompt("ввести новый вариант от 1 до 100");
        }

        if (userNumber < correctNumber) {
            alert("Больше!");
            userNumber = +prompt("ввести новый вариант от 1 до 100");
        }

        if (userNumber === correctNumber) {
            alert("Правильно!");
            confirm("Еще разок?") ? getStartGame() : alert("Ну ладно");
        }
    };

    getStartGame();
}
