"use strict";

// Напишите функцию isPrime.
// Она принимает число и возвращает true, если число является простым, а в ином случае false.
// Простое число - целое положительное число, имеющее ровно два различных натуральных делителя - единицу и самого себя.
// Например, 5 - простое число, так как делится без остатка только на 1 и на себя.
// 151, 911, 1987 - так же простые числа
// Используйте цикл for в функции

function isPrime(num) {
    if (num === 2) {
        return true;
    } else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i !== 0) {
                return true;
            } else if (num === i * i) {
                return false;
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
}

console.log(isPrime(33));
