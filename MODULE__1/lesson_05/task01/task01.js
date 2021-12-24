"use strict";

// Первая задача:
// Напишите функцию конвертер,
// которая на вход принимает стоимость покупки в евро и выводит
// результат в рублях
// 1 евро = 1.2 доллара,
// 1 доллар = 73 рубля.

{
const getMoney = () => prompt("Сколько у вас евро?");

const getConvert = (callBack) => {
    let sum = callBack
    if (Number.isNaN(parseInt(sum))) {
        alert("Введите число");
        sum = getMoney()
    }
    sum = sum * 1.2 * 73
    return console.log("В рублях у вас: ", sum);
};
getConvert(getMoney())
}
