"use strict";

// Первая задача:
// В прошлом задании вы от пользователя получали количество товара и цену
// ✔ С помощью конструкции if (else) убедитесь что пользователь ввёл число
// ✔ Если число, то всё должно работать как и в прошлом задании
// ✔ Если пользователь вёл не число, то вывести сообщение "Вы ввели не корректные данные"
// ✔ Других сообщений в консоли быть не должно

{
    const productTitle = prompt("Наименование товара");

    let productCount = Number(prompt("Количество товара"));

    if (Number.isNaN(productCount)) {
        alert("Вы ввели не корректные данные! Должно быть число!");
        productCount = Number(prompt("Количество товара"));
    } 

    const productCategory = prompt("Категория товара");

    let productPrice = Number(prompt("Цена товара"));

    if (Number.isNaN(productPrice)) {
        alert("Вы ввели не корректные данные! Должно быть число!");
        productPrice = Number(prompt("Цена товара"));
    }
    const totalAmount = productPrice * productCount;

    console.log(`
        Нименование товара: ${productTitle}
        Количество товара: ${productCount}
        Категория товара: ${productCategory}
        Общая сумма: ${totalAmount} RUB
    `);
}
