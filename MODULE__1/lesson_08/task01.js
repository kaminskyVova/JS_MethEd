"use strict";

// Первая задача:
// Напишите функцию генератор  массива случайных чисел в файле task01.js
// Функция принимает один обязательный параметр это количество элементов в массиве
// И возвращает массив со случайными числами от одного до 100 включительно;

{
    const generateArray = (num = 100) => {
        let array = [];
        for (let i = 1; i <= num; i++) {
            array.push(i);
        }
        return array;
    };

    console.log(generateArray());
}
