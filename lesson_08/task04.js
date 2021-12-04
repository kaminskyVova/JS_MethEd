"use strict";

// Четвертая задача:
// Создайте файл task04.js
// Необходимо написать функцию, которая принимает 2 параметра n и m
// И возвращает массив с високосными годами в диапазоне между n и m
// Алгоритм определения високосного года следует найти в интернете самостоятельно или спросите у куратора
// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.

{
    const getLeapYear = (n, m) => {
        let arr = [];

        if (n >= 0 && m >= 0) {
            if (n > m) {
                for (let i = n; i >= m; i--) {
                    arr.push(i);
                }
            }
            if (n < m) {
                for (let i = n; i <= m; i++) {
                    arr.push(i);
                }
            }

            const filteredArray = arr.filter((x) => x % 2 === 0);

            return filteredArray;
            
        } else {
            console.log("Date is not correct must to be > -1");

            return (arr = []);
        }
    };

    console.log(getLeapYear(-2020, 1990));
}
