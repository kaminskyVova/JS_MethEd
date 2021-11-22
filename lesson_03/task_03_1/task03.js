"use strict";

// Запросите у пользователя "Наименование товара" с помощью функции prompt и запишите в константу

// ✔ Аналогичные действия сделайте с константами "Количество товара", "Категория товара" и "Цена товара"

// ✔ Выведите в консоль тип данных, убедитесь что количество и цена тип данных numbers, если это не так-то поправьте

// ✔ В консоль выведите строку со значением количество товара, наименование и общую сумма

// пример: "На складе 3 единицы товара "Приставка денди" на сумму 6600 деревянных"

{
    const productTitle = prompt("Наименование товара");
    const productCount = Number(prompt("Количество товара"));
    console.log(typeof productCount);
    const productCategory = prompt("Категория товара");
    const productPrice = Number(prompt("Цена товара"));
    console.log(typeof productPrice);
    const totalAmount = productPrice * productCount;

    console.log(`
        Нименование товара: ${productTitle}
        Количество товара: ${productCount}
        Общая сумма: ${totalAmount} RUB
    `);
}

