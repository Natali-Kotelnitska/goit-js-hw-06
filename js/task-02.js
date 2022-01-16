// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listContainerEl = document.querySelector('#ingredients');

const makeingridientsOptions = ingridients => {
  return ingridients.map(ingridient => {
    const navItemEl = document.createElement('li');
    navItemEl.textContent = ingridient;
    navItemEl.classList.add('item');

    return navItemEl;
  });
};

const itemElements = makeingridientsOptions(ingredients);
listContainerEl.append(...itemElements);
