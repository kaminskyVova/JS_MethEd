"use strict";

// Третья задача:
// Напишите функцию, которая принимает строку и
// возвращает обратную строку
// Пример: "Привет мир" => "рим тевирП"

{
const reverseString = (str) => {
    if (str === "") return "";
    else return reverseString(str.substr(1)) + str.charAt(0);
};
console.log(reverseString("Привет мир"));
}

