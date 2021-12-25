'use strict';

// 1) уберем рекламму
// 2) упорядочим порядок картинок
// 3) переместим содержимое списков согласно правильному варрианту

// 1) уберем рекламму
const ads = document.querySelector('.ads');
ads.remove();

// 2) упорядочим порядок картинок

const itemsList = document.querySelector('.items');
const items = itemsList.querySelectorAll('.item');

// порядок картинок
itemsList.prepend(items[1]);
items[2].after(items[0]);
items[0].before(items[3]);

// порядок содержимого списков
const propsList = document.querySelectorAll('.props__list');
console.log('propsList: ', propsList);

const propsItem = [];

propsList.forEach((item) => {
  const li = item.querySelectorAll('.props__item');
  propsItem.push(li);
  return propsItem;
});
console.log('propsItem: ', propsItem);

propsItem[3][3].after(propsItem[1][3]);
propsItem[1][8].after(propsItem[5][9]);
propsItem[1][8].after(propsItem[5][8]);


const thirdItemList = propsList[2].cloneNode(true)
const fourthItemList = propsList[4].cloneNode(true)

propsList[4].replaceWith(thirdItemList)
propsList[2].replaceWith(fourthItemList)