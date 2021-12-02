"use strict";

// Первая задача:
// Напишите функцию filter()
// функция принимает в параметрах 2 массива
// Первый массив — список всех студентов, второй — список студентов не сдавших экзамен.
// Результат функции: массив из всех студентов, которые сдали экзамен.

{
    const allStudents = [
        "Ivanov",
        "Petrov",
        "Sidorov",
        "Smirnov",
        "Popov",
        "Sokolov",
        "Kuznetzov",
    ];
    const failedStudents = ["Sidorov", "Smirnov", "Popov"];

    const filter = (arr1, arr2) => {
        const resArr = arr1.filter((item) => !arr2.includes(item));
        return console.log(resArr);
    };

    filter(allStudents, failedStudents);
}
