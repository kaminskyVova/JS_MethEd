"use strict";

// Третья задача:
// Напишите функцию reverseString,
// Она принимает строку и возвращает строку перевертыш
// Пример: "Цикл" => "лкиЦ"

const reversStr = (str) => {
    for (let i = str.length - 1; i >= 0; i--) {
        console.log(str[i]);
    }
};
reversStr("World");
