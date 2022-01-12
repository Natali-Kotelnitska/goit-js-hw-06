//апиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега < h2 >) и количество элементов в категории(всех вложенных в него < li >).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const navLinkEl = document.querySelector('#categories');

const list = navLinkEl.children;

console.log(`Number of categories: ${list.length}`);

//
// const categoriEl = document.querySelector('#categories');
// console.log(`В списке ${categoriEl.children.length} категории.`);

const itemTitleEl = document.querySelectorAll('h2');
console.log(itemTitleEl);

//     `Category: ${[itemTitleEl].textContent}
// Elements: ${[itemTitleEl].nextElementSibling.children.length}`,

console.log(categories);

// console.log(`Категория: ${itemTitleEl[0].textContent}`);
// console.log(`Количество элементов: ${itemTitleEl[0].nextElementSibling.children.length}`);

// console.log(`Категория: ${itemTitleEl[1].textContent}`);
// console.log(`Количество элементов: ${itemTitleEl[1].nextElementSibling.children.length}`);

// console.log(`Категория: ${itemTitleEl[2].textContent}`);
// console.log(`Количество элементов: ${itemTitleEl[2].nextElementSibling.children.length}`);
