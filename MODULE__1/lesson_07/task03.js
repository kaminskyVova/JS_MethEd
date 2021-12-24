"use strict";

// Третья задача:
// Напишите функцию addPrefix
// Функция получает массив в виде параметров и возвращает массив с префиксами
// После префикса пробел добавляется автоматически
// Входящий массив:
// const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
// Вызов функции:
// addPrefix(names, 'Mr')
// Результат функции:
// ['Mr Noah', 'Mr Liam', 'Mr Mason', 'Mr Jacob', 'Mr. Robot', 'Mr William', 'Mr Ethan', 'Mr Michael', 'Mr Alexander'];

{
    const names = [
        "Noah",
        "Liam",
        "Mason",
        "Jacob",
        "Robot",
        "William",
        "Ethan",
        "Michael",
        "Alexander",
    ];

    const addPrefix = (arr, pref) => {
        const res = arr.map((item) => {
            return (item = `${pref} ${item}`);
        });

        console.log(res);
    };
    addPrefix(names, "Mr");
}
