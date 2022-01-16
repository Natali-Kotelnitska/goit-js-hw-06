// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает
// один параметр - число.Функция создает столько < div >,
// сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const inputEl = document.querySelector('input');
const buttonCreateEl = document.querySelector('button[data-create]');
const buttonDestroyEl = document.querySelector('button[data-destroy]');
const boxesContainerEl = document.getElementById('boxes');
//

buttonCreateEl.addEventListener('click', onOutputChange);
buttonDestroyEl.addEventListener('click', destroyBoxes);

let boxSize = 30;

function onOutputChange() {
  let amount = Number(inputEl.value);
  const result = createBoxes(amount);
}

function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    boxSize += 10;

    const box = document.createElement('div');
    box.style.width = boxSize + 'px';
    box.style.height = boxSize + 'px';
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '2px';
    box.style.border = 'solid 1px black';

    boxesContainerEl.append(box);
  }
}

// функция destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
function destroyBoxes() {
  boxesContainerEl.innerHTML = '';
  boxSize = 30;
}

// Рандомна Функція зміни кольру для div
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
