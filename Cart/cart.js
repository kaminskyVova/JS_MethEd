'use strict';

// Создайте файл cart.js, подключите к html-файлу
// Создайте объект cart — корзина
// Объект будет содержать следующие свойства:

// items = пустой массив - это товары
// totalPrice = 0 - общая стоимость корзины
// count = 0 - количество товаров

// и методы
// getTotalPrice - получить общую стоимость товаров
// add - добавить товар
// increaseCount - увеличить количество товаров
// calculateItemPrice - посчитать общую стоимость товаров
// clear - очистить корзину
// print - распечатать корзину

// Далее описание каждого метода
// getTotalPrice()
// метод возвращает значение свойства totalPrice
// calculateItemPrice()
// пересчитывает стоимость всей корзины и записывает значение в totalPrice
// increaseCount()
// Принимает один параметр(число)
// Увеличивает свойство count на это число
// add()
// Принимает три параметра:
// название товара
// цену товара
// количество товара (опциональный параметр, по умолчанию 1 товар)
// этот метод формирует объект из полученных параметров
// и добавляет его в свойство items
// так же вызывает все необходимые методы
// чтобы свойства count и totalPrice были актуальные
// clear()
// Очищает полностью нашу корзину, возвращает все значения в изначальные
// print()
// Выводит в консоль JSON строку из массива items и
// на следующей строке выводит общую стоимость корзины
// Для проверки работы функционала добавить 3 или более товаров в корзину
// После вызвать метод print для вывода информации в консоль

{
  const cart = {
    items: [],
    count: 0,
    discount: 0,

    set discount_val(str) {
      // const promo = prompt('Введите промокод');
      // confirm('У вас есть промокод?') ? promo : alert('ok');
      if (str === 'METHED') {
        this.discount = 15;
      }
      if (str === 'NEWYEAR') {
        this.discount = 21;
      }
    },

    get totalPrice() {
      return this.calculateItemPrice();
    },

    set totalPrice(val) {
      this.totalPrice = val;
    },

    add(title, price, count) {
      const getItems = () => {
        title = prompt('Вевдите название товара');
        price = +prompt('Вевдите цену товара');

        if (Number.isNaN(price)) {
          alert('Введите цифру!');
          return (price = +prompt('Вевдите цену товара'));
        }

        count = +prompt('Вевдите количество товара');

        if (Number.isNaN(count)) {
          alert('Введите цифру!');
          return (count = +prompt('Вевдите количество товара'));
        }

        this.items.push({title, price, count});

        confirm('Добавить еще товары в корзину') ? getItems() : alert('Ok!');

        this.discount_val = confirm('У вас есть промокод?') ?
        prompt('Введите промокод') :
        alert('ok');
      };

      this.calculateItemPrice();
      this.increaseCount();
      getItems();
    },

    increaseCount() {
      let tottaCount = 0;
      this.items.forEach((item) => (tottaCount += item.count));
      this.count = tottaCount;
    },

    calculateItemPrice() {
      let totalPrice = 0;
      let sum = 0;
      this.items.forEach((item) => (totalPrice += item.price * item.count));
      console.log('totalPrice: ', totalPrice);

      if (this.discount === 21) {
        sum = (totalPrice / 100) * 21;
        totalPrice -= sum;
      }
      if (this.discount === 15) {
        sum = (totalPrice / 100) * 15;
        totalPrice -= sum;
      }
      return totalPrice;
    },

    clear() {
      const clearAll = () => {
        (this.items = []), (this.count = 0);
        console.log(this.print());
      };
      confirm('Очистить корзину?') ? clearAll() : alert('Красавчик!');
    },

    print() {
      this.items.map((item) => {
        `
        ДОБАВЛЕННО В КОРЗИНУ'
        товар ${item.title}
        общаяя сумма ${item.price * item.count}
        `;
      });

      const myObjStr = JSON.stringify(cart.items);
      console.log(myObjStr);

      console.log(`
        Общее количество товаров: ${this.count}
        Общая сумма заказа: ${this.totalPrice}
        `);
    },
  };

  // cart.discount_val = confirm('У вас есть промокод?') ?
  //   prompt('Введите промокод') :
  //   alert('ok');

  cart.add();
  cart.increaseCount();
  cart.print();
  cart.clear();
}
