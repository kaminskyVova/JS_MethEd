"use strict";

// Вторая задача:
// Напишите функцию getAverageValue
// для получения среднеарифметического значения
// с округлением в меньшую сторону до целого числа
// С помощью этой функции получите средний чек за день, в массиве данные всех чеков за день:

{
    const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

    const getAverageValue = (arr) => {
        const reduce = arr.reduce((item, acc) => item + acc);
        const result = Math.floor(reduce / arr.length);

        return console.log(result);
    };
    getAverageValue(allСashbox);
}
