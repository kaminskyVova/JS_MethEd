"use strict";

// Четвертая задача:

// Напишите функцию calculate(), которая вычисляет стоимость корзины товаров после применения всех акций и скидок.
// В качестве аргументов функция принимает 3 параметра:
// Общая сумма корзины
// Количество товаров в корзине
// Промокод
// Правила и порядок (порядок важен!) начисления скидок:
// Если товаров больше 10, то ко всей сумме применяется скидка 3% ко всей сумме;
// При сумме, превышающей 30 000, применяется скидка 15% к сумме превышения
// Если промокод равен "METHED", то скидка 10%
// Если промокод равен "G3H2Z1", то скидка 500 рублей, но только если сумма  корзины после предыдущих скидок превышает 2000р

// Порядок применения скидок должен соблюдаться

const calculate = (totalSum, prodCount, promoCode) => {
    let buff = 0;
    let sum = totalSum;

    if (prodCount > 10) {
        buff = (totalSum / 100) * 3;
        sum -= buff;
        console.log("sum: ", sum);
    }

    if (prodCount > 10 && totalSum > 30000) {
        buff = ((totalSum - 30000) / 100) * 15;
        console.log("buff: ", buff);
        totalSum -= buff;
    }

    if (promoCode === "METHED") {
        console.log(totalSum);
        buff = (totalSum / 100) * 10;
        totalSum -= buff;
    }

    if (promoCode === "G3H2Z1" && totalSum > 2000) {
        totalSum = sum - 500;
    }

    return totalSum;
};

console.log(calculate(35000, 11, "G3H2Z1"));
