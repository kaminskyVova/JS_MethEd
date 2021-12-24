"use strict";

// Напишите функцию getAveragePriceGoods
// для получения средней цены товара
// Дан многомерный  массив:
// const allСashbox = [
//   [12, 4500],
//   [7, 3210],
//   [4, 650],
//   [3, 1250],
//   [9, 7830],
//   [1, 990],
//   [6, 13900],
//   [1, 370]
// ];
// В каждом массиве из двух элементов, первым является количество товаров в чеке, а вторым — общая сумма.
// Необходимо посчитать среднюю стоимость одного товара в магазине.

const allСashbox = [
    [12, 4500],
    [7, 3210],
    [4, 650],
    [3, 1250],
    [9, 7830],
    [1, 990],
    [6, 13900],
    [1, 370],
];

const getAveragePriceGoods = (arr) => {
    let priseOfProduct = [];
    for (let i = 0; i < allСashbox.length; i++) {
        priseOfProduct.push(Math.round(allСashbox[i][1] / allСashbox[i][0]));
    }

    const reduce = priseOfProduct.reduce((item, acc) => item + acc);
    const getAverageValue = Math.floor(reduce / priseOfProduct.length);

    return console.log("getAverageValue: ", getAverageValue);
};
getAveragePriceGoods(allСashbox);
