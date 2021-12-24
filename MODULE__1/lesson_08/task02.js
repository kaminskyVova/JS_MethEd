"use strict";

// Вторая задача:
// Скопируйте код task01.js в task02.js
// Продолжаем работать с предыдущей функцией
// Функция принимает еще два параметра n и m
// Числа m и n формируют диапазон, в пределах которого должно сгенерироваться числа для массива
// m и n включительно
// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.

{
    const generateArray = (num, n, m) => {
        let array = [];

        if (num != null) {
            for (let i = 1; i <= num; i++) {
                array.push(i);
            }
        }

        if (n > m) {
            for (let i = n; i >= m; i--) {
                array.push(i);
            }
        }

        if (n < m) {
            for (let i = n; i <= m; i++) {
                array.push(i);
            }
        }
        return array;
    };

    console.log(generateArray(null, 30, 5));
}
