"use strict"

// Вторая задача:
// Напишите функцию, которая принимает строку и 
// возвращает модифицированную строку
// Строка начинается с большой буквы, остальные буквы маленькие
// ример:  "привет Мир" => "Привет мир"

{const getModStr = (str) => {

    if (!str) {
        str = prompt("Напишите что нибуть")
    }
    str = `${str[0].toUpperCase()}${str.slice(1, str.length).toLowerCase()}`
    return console.log('str: ', str);
    

}
getModStr()
}
