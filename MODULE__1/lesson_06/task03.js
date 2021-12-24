"use strict";

// Третья задача:
// Напишите функцию reverseString,
// Она принимает строку и возвращает строку перевертыш
// Пример: "Цикл" => "лкиЦ"

const reversStr = (str) => {
    let newStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return console.log(newStr);
};
reversStr("World");
