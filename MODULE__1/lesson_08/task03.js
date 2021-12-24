"use strict";

// Третья задача:
// Скопируйте код task02.js в task03.js
// Добавьте 4-ый опциональный параметр у функции
// 4-ый опциональный параметр это строка:
// если функция получает 'even', то функция возвращает массив чётных чисел
// если функция получает 'odd', то функция возвращает массив нечётных чисел

{
    const generateArray = (num, n, m, str) => {
        let arr = [];
        let filteredArray = [];

        if (num) {
            for (let i = 1; i <= num; i++) {
                arr.push(i);
            }
        }

        if (n && m) {
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
        }

        if (str === "even") {
            filteredArray = arr.filter((x) => x % 2 === 0);
        }

        if (str === "odd") {
            filteredArray = arr.filter((x) => x % 2 !== 0);
        }

        return filteredArray;
    };

    console.log(generateArray(100, null, null, "odd"));
}
