"use strict";

// Создайте файл game02.js
// Усовершенствуйте игру, которую написали в game01
// бот предлагает ввести два числа, и загадывает случайное число в этом диапазоне
// бот запоминает каждое число которое ввел пользователь и записывает в массив
// бот отграничивает количество попыток до 30% от количества цифр в диапазоне
// если пользователь повторно ввел число,
// которое вводил ранее, то бот выводит "Это число вы уже вводили" попытка не засчитывается
// если диапазон от 50 до 100, то попыток бот даёт 15
// если попытки закончились игра прекращается
{
    const getStartGame = () => {
        alert("Задайте диапозон между двумя числами и угадайте число");
        let userNumber1 = +prompt("Задайте первое число");
        let userNumber2 = +prompt("Задайте второе число");
        let arr = [];

        const correctNumber = Math.floor(
            Math.random() * (userNumber2 - userNumber1) + 1,
        );
        console.log("correctNumber: ", correctNumber);

        if (userNumber1 > userNumber2) {
            for (let i = userNumber1; i >= userNumber2; i--) {
                arr.push(i);
            }
        }

        if (userNumber1 < userNumber2) {
            for (let i = userNumber1; i <= userNumber2; i++) {
                arr.push(i);
            }
        }

        let count = Math.floor((arr.length / 100) * 30);

        if (userNumber1 >= 50 && userNumber2 === 100) count = 15;

        console.log(count);

        let answerNumber = 0;
        let answerArr = [];

        alert(`У вас попыток ${count}`);
        answerNumber = +prompt("Угадайте число");

        for (let i = count; count >= 0; i--) {
            answerArr.push(answerNumber);
            count--;
            console.log("count: ", count);

            alert(`Не верно! У вас попыток осталось ${count}`);
            answerNumber = +prompt("Угадайте число");

            if (answerArr.includes(answerNumber)) {
                alert("Такое число уже набранно");
                count++
            } else {
                answerArr.push(answerNumber);
            }

            if (correctNumber === answerNumber) {
                alert("Верно!");
                break;
            }

            if (count === 0) {
                alert("Игра окончена вы проиграли!");
                confirm("Еще разок?") ? getStartGame() : alert("Ну ладно");
            }
        }

        console.log(answerArr);
    };

    getStartGame();
}
