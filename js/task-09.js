// Напиши скрипт, который изменяет цвета фона элемента <body>
// через инлайн стиль при клике на button.change - color
// и выводит значение цвета в span.color.

{
  /* <div class="widget">
  <p>
    Background color: <span class="color">-</span>
  </p>
  <button type="button" class="change-color">
    Change color
  </button>
</div>; */
}

// Для генерации случайного цвета используй функцию getRandomHexColor.
const body = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.color');

buttonEl.addEventListener('click', onBodyColorChange);

function onBodyColorChange(evt) {
  spanColorEl.textContent = body.style.backgroundColor = getRandomHexColor();
  // spanColorEl.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
